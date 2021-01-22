export const UP_VOTE = 'UP_VOTE'

export default function vote(vote) {
    return {
        type: UP_VOTE,
        vote
    }
}