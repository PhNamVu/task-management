/* eslint consistent-return: ["off", { "treatUndefinedAsUnspecified": true }] */
import { Avatar, chakra, Flex, Spinner } from '@chakra-ui/react'
import React from 'react'
import { useUpdateProfileMutation } from '../../generated/hooks'

import { storage, useAuth } from '../../hooks/use-auth'

export const AvatarSetting = () => {
  const {
    state: { user },
  }: any = useAuth()
  const [updateUserAvatar] = useUpdateProfileMutation()

  const [upload, setUpload] = React.useState(false)
  const [errors, setErrors] = React.useState('')

  const handleFileChange = (e: any) => {
    setUpload(true)

    const uploadFiles = Array.from(e.target.files as FileList).map(
      async (file: File) => {
        const validImageTypes = [
          'image/gif',
          'image/jpeg',
          'image/jpg',
          'image/png',
          'image/bmp',
        ]
        if (file.size > 5242880) {
          setErrors('File too large. File uploads cannot exceed 5MB')
          setUpload(false)
        } else if (!validImageTypes.includes(file.type)) {
          setErrors('File type must be .jpg, .bmp, .gif, .jpeg, .png')
          setUpload(false)
        } else {
          const storageRef = storage.ref()
          const ref = storageRef.child(`users/${user.uid}/avatar/${file.name}`)
          const metadata = {
            uid: user.uid,
            size: file.size,
            contentType: file.type,
            name: file.name,
          }
          await ref.put(file, metadata)
          const assetUrl = await ref.getDownloadURL()
          return { ...metadata, assetUrl }
        }
      }
    )
    if (uploadFiles[0] !== undefined) {
      uploadFiles[0]
        .then((res) => {
          if (res !== undefined) {
            Promise.all(uploadFiles)
              .then(async (result) => {
                await user.updateProfile({
                  photoURL: result[0]?.assetUrl,
                })
                const ress = await updateUserAvatar({
                  variables: {
                    id: user.uid,
                    object: {
                      photoUrl: result[0]?.assetUrl,
                    },
                  },
                })
                console.log('res', ress)
                setUpload(false)
              })
              .catch((error) => {
                setUpload(false)
                console.error(error)
              })
            setErrors('')
          }
        })
        .catch((err) => {
          console.log('uploadFiles err', err)
        })
    } else {
      setUpload(false)
    }
  }

  return (
    <Flex w="100%" flexDirection="column" alignItems="center" mb={5}>
      <Avatar name={user.displayName} src={user?.photoURL} size="xl" />

      {upload ? (
        <Spinner />
      ) : (
        <>
          <label htmlFor="upload-button">
            <chakra.span
              _hover={{
                fontWeight: '500',
                cursor: 'pointer',
                textDecoration: 'underline',
              }}
            >
              Edit
            </chakra.span>
            <input
              accept="image/*"
              multiple
              type="file"
              id="upload-button"
              onChange={handleFileChange}
              hidden
            />
          </label>
        </>
      )}
      {errors ? <div>{errors}</div> : ''}
    </Flex>
  )
}
