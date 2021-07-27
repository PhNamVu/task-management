import {
  Box,
  Flex,
  Icon,
  IconButton,
  Spinner,
  Textarea,
} from '@chakra-ui/react'
import randomstring from 'randomstring'
import React, { useState } from 'react'
import { useImmer } from 'use-immer'
import { useDropzone } from 'react-dropzone'
import { nanoid } from 'nanoid'
import { IoAttachOutline } from 'react-icons/io5'
import { AiOutlineArrowUp } from 'react-icons/ai'

import { storage, useAuth } from '../../../hooks/use-auth'
import { Alerter } from '../../shared/Alerter'
import { Tager } from '../../shared/Tager'

interface Props {
  onSendComment?: any
  refStorage: string
  maxSizeFile: number
  acceptedFileExtensions: string
}

export const CommentInput: React.FC<Props> = ({
  onSendComment,
  refStorage,
  maxSizeFile,
  acceptedFileExtensions,
}) => {
  const {
    state: { user },
  }: any = useAuth()
  const [msg, setMsg] = useState('')
  const [files, setFiles] = useImmer([])

  const onChange = ({ target }: any) => {
    setMsg(target.value)
  }
  const sendComments = async (e: any) => {
    e.preventDefault()

    if (msg.trim() === '' && files.length === 0) return
    setMsg('')
    setFiles(() => [])

    onSendComment({
      id: randomstring.generate(8),
      text: msg,
      attachments:
        files.length > 0
          ? files.map((item: any) => ({
              id: item.id,
              uid: user.uid,
              size: item.size,
              contentType: item.type,
              name: item.name,
              assetUrl: item.assetUrl,
            }))
          : null,
    })
  }
  const submitComment = (e: any) => {
    sendComments(e)
  }
  const handleCancelUploadFileById = (item: any) => {
    // cancel upload
    item.uploadTaskRef.cancel()

    const desertRef = storage
      .ref()
      .child(`/${refStorage}/${item.id}-${item.name}`)

    setFiles((draft: any) => {
      draft.splice(
        draft.findIndex((x: any) => x.id === item.id),
        1
      )

      desertRef
        .delete()
        .then(() => {
          console.log('successfully deleted file on firebase')
        })
        .catch((error: Error) => {
          console.log('error delete file', error)
        })
    })
  }
  const handleSendCommentOnEnter = (e: any) => {
    if (msg.trim() === '' && files.length === 0) return
    if (e.key === 'Enter' && !e.shiftKey && e.target.value && msg !== '') {
      sendComments(e)
    }
  }

  const onFileChange = (acceptedFiles: any) => {
    for (let i = 0; i < acceptedFiles.length; i += 1) {
      const file = acceptedFiles[i]
      const fileId = nanoid()
      const uploadTaskRef = storage
        .ref()
        .child(`/${refStorage}/${fileId}-${file.name}`)
        .put(file)

      setFiles((draft: any) => {
        draft.push({
          id: fileId,
          name: file.name,
          type: file.type,
          size: file.size,
          uploadTaskRef,
          status: 'loading',
          assetUrl: '',
        })
      })

      uploadTaskRef.on(
        'state_changed',
        () => {},
        () => {
          setFiles((draft: any) => {
            const ie = draft.findIndex((x: any) => x.id === fileId)
            if (ie !== -1) {
              draft[ie].status = 'error'
            }
          })
        },
        async () => {
          const getDownloadLink = await uploadTaskRef.snapshot.ref.getDownloadURL()

          setFiles((draft: any) => {
            const ie = draft.findIndex((x: any) => x.id === fileId)
            if (ie !== -1) {
              draft[ie].status = 'success'
              draft[ie].assetUrl = getDownloadLink
            }
          })
        }
      )
    }
  }

  const { getRootProps, getInputProps, fileRejections } = useDropzone({
    accept: acceptedFileExtensions,
    maxSize: maxSizeFile * 1000000,
    onDrop: (acceptedFiles) => {
      onFileChange(acceptedFiles)
    },
  })

  const fileRejectionItems = fileRejections.map(({ file, errors }) => (
    <ul>
      <li key={randomstring.generate(8)}>
        <ul>
          {errors.map((e) => (
            <li key={e.code}>
              <span
                style={{
                  color: 'red.500',
                }}
              >
                {`${
                  e.code === 'file-too-large'
                    ? `File uploads cannot exceed ${20} MB`
                    : e.message
                } (${file.name})`}
              </span>
            </li>
          ))}
        </ul>
      </li>
    </ul>
  ))
  return (
    <Flex bottom="0" pl={5} position="sticky" zIndex="9999" bg="white">
      <Box h="100%" w="100%">
        <Flex h="100%">
          <Textarea
            mr={1}
            focusBorderColor="cyan.400"
            placeholder="Add a comment "
            value={msg}
            onChange={onChange}
            onKeyDown={handleSendCommentOnEnter}
          />
          <Flex
            h="100%"
            w="10%"
            flexDirection="column"
            alignItems="center"
            justifyContent="space-between"
          >
            <IconButton
              disabled={
                files.filter((item: any) => item.status === 'loading').length >
                  0 ||
                files.filter((item: any) => item.status === 'error').length >
                  0 ||
                (msg.trim() === '' && files.length === 0)
              }
              onClick={submitComment}
              aria-label="Comment"
              icon={<AiOutlineArrowUp />}
              colorScheme="cyan"
            />
            <label htmlFor="upload-button">
              <div {...getRootProps()} style={{ visibility: 'hidden' }}>
                <input
                  {...getInputProps()}
                  type="file"
                  id="upload-button"
                  name="upload-button"
                />
              </div>
              <Icon
                as={IoAttachOutline}
                w={6}
                h={6}
                color="grey"
                _hover={{ cursor: 'pointer' }}
              />
            </label>
          </Flex>
        </Flex>

        {files.length > 0 && (
          <Flex
            flexWrap="nowrap"
            overflowX="scroll"
            width="100%"
            bottom="2.5rem"
          >
            {files.map((item: any) => (
              <Tager
                key={item.id}
                onClose={() => handleCancelUploadFileById(item)}
              >
                {item.status === 'loading' && (
                  <>
                    <Spinner size="sm" />
                  </>
                )}{' '}
                {item.status === 'error' && (
                  <>
                    <Alerter status="error">Error try again</Alerter>
                  </>
                )}
                {item.name}
              </Tager>
            ))}
          </Flex>
        )}
        <div>{fileRejectionItems}</div>
      </Box>{' '}
    </Flex>
  )
}
