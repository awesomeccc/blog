/* <template>
  <div class="player">
    <h3 class="header">{{currentSong.name}}---{{currentSong.singer}}</h3>
    <hr>
    <p class="album">{{currentSong.album}}</p>
    <div class="img-container">
      <img :src="currentSong.image" alt>
    </div>
    <p class="lyric"></p>
    <div class="controler">
      <el-row>
        <el-button type="primary" icon="el-icon-d-arrow-left" size="medium" circle @click="prev"></el-button>
        <el-button type="primary"  circle @click.stop="togglePlaying" :class="playIcon"></el-button>
        <el-button type="primary" icon="el-icon-d-arrow-right" circle @click="next"></el-button>
      </el-row>
            <span class="time time-l">{{format(currentTime)}}</span>
            <span class="time time-r">{{format(currentSong.duration)}}</span>
            <progress-bar :percent="percent" @percentChange="onProgressBarChange"></Progress-bar>
    </div>
    <audio ref="audio" :src="currentSong.url"  @play="ready" @error="error" 
    @timeupdate="updateTime"></audio>
  </div>
</template>
<script>
// import { mapGetters } from "vuex";
import { mapGetters, mapMutations, mapActions } from "vuex";
 import ProgressBar from './progressBar.vue'

export default {
  data() {
    return {
      list: {},
      songReady: false,
      currentTime: 0,
     currentLyric: null,
     currentLineNum: 0,
    currentShow: 'cd',
    playingLyric: ''
    };
  },
  components: {
    ProgressBar
  },
  methods: {
          onProgressBarChange(percent) {
        const currentTime = this.currentSong.duration * percent
        this.$refs.audio.currentTime = currentTime
      //  console.log(this.currentTime)
        if (!this.playing) {
          this.togglePlaying()
        }
        // if (this.currentLyric) {
        //   this.currentLyric.seek(currentTime * 1000)
        // }
      },
    togglePlaying() {
      // if (!this.songReady) {
      //   return
      // }
      this.setPlayingState(!this.playing);
      this.songReady =false
     // console.log(this.playing);
      // if (this.currentLyric) {
      //   this.currentLyric.togglePlay()
      // }
    },
     next() {
        if (!this.songReady) {
          return
        }
        if (this.playlist.length === 1) {
          // this.loop()
          return
        } else {
          let index = this.currentIndex + 1
          if (index === this.playlist.length) {
            index = 0
          }
          this.setCurrentIndex(index)
          if (!this.playing) {
            this.togglePlaying()
          }
        }
        this.songReady = false
      },
      prev() {
        if (!this.songReady) {
          return
        }
        if (this.playlist.length === 1) {
          // this.loop()
          return
        } else {
          let index = this.currentIndex - 1
          if (index === -1) {
            index = this.playlist.length - 1
          }
          this.setCurrentIndex(index)
          if (!this.playing) {
            this.togglePlaying()
          }
        }
        this.songReady = false
      },
      ready() {
        this.songReady = true
      },
      error() {
        this.songReady = true
      },
       updateTime(e) {
        this.currentTime = e.target.currentTime
      },
      format(interval) {
        interval = interval | 0
        const minute = interval / 60 | 0
        const second = this._pad(interval % 60)
        return `${minute}:${second}`
      },
        _pad(num, n = 2) {
        let len = num.toString().length
        while (len < n) {
          num = '0' + num
          len++
        }
        return num
      },
    ...mapMutations({
      setPlayingState: "music/SET_PLAYING_STATE",
      setCurrentIndex: "music/SET_CURRENT_INDEX"
    })
  },
  computed: {
    ...mapGetters({
      currentSong: "music/currentSong",
      playing: "music/playing",
      currentIndex: "music/isCurrentIndex",
      playlist: 'music/isPlayList'
    }),
     playIcon() {
        return this.playing ? 'el-icon-video-pause' : 'el-icon-video-play'
      },
    percent() {
        return this.currentTime / this.currentSong.duration
      },
  },
  watch: {
    playing(newPlaying) {
      const audio = this.$refs.audio;
      this.$nextTick(() => {
        newPlaying ? audio.play() : audio.pause();
      });
    }
  }
};
</script>
<style>
.header {
  width: 100%;
  text-align: center;
  height: 35px;
  line-height: 35px;
  /* height: 20px; */
}
.album {
  text-align: center;
  line-height: 30px;
  margin-top: 30px;
}
.player {
  padding: relative;
}
.img-container {
  margin: 40px 60px 40px 60px;
  height: 460px;
}
/* .background {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 1000px;
  z-index: 11;
  opacity: 0.6;
  filter: blur(20px);
} */
.controler {
  text-align: center;
}
</style>
 */