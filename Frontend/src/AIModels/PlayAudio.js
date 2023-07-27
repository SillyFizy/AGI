import player from 'play-sound';

const audioPlayer = (audioPath) => {
    const audioPlayer = player();
    audioPlayer.play(audioPath, (error) => {
        if (error) {
            console.log(error)
        }
    })
}
export default audioPlayer;