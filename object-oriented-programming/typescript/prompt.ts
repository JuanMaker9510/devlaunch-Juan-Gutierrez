import promptSync from 'prompt-sync'

const prompt = promptSync()

export function getUserName() {
    const name = prompt('Name: ')
    return name
}

export default getUserName
