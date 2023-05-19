module.exports = {
    app: {
        token: 'MTEwODkzMTA5MDAxNTU5NjU3NA.GlnBXJ.dtcunLXfUplnSK58xaGv0Eh7gXVpS-lbrkpksQ',
        playing: 'DARK E LINDO',
        global: true,
        guild: '/'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        maxVol: 100,
        leaveOnEnd: true,
        loopMessage: false,
        spotifyBridge: true,
        defaultvolume: 75,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
