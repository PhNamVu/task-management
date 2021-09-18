export const getStatusName = (c: any) => {
    switch (c) {
      case '1':
        return 'todo'
      case '2':
        return 'in progress'
      case '3':
        return 'done'
      default:
        return 'archive'
    }
  }