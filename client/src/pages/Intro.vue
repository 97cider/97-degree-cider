<template>
  <div id="app">
    <div class="intro-bg-elements">
      <div class="leaf-container">
        <transition name="slide-fade">    
          <img class="svg-leaf" src="public/svgs/leaf-inverted.svg">
        </transition>
        <transition name="slide-fade">    
          <img class="svg-leaf mid" src="public/svgs/leaf-inverted.svg">
        </transition>
        <transition name="slide-fade">    
          <img class="svg-leaf outer" src="public/svgs/leaf-inverted.svg">
        </transition>
      </div>
    </div>
    <div class="intro-bg ">
        <div class="upper"></div>
    </div>
    <overlay ref="graphicsOverlay">
      <div class="graphics header">
        Graphics Settings
      </div>
      <div class="graphics highlight-container">
          <div class="highlight-text">
            This website uses interactive graphics which can be expensive on some machines. Chosing a lower settings option will disable certain options of the site, which can result in better performance.
            <br>
            An explanation of the settings can be found below. 
          </div>
      </div>
      <div class="graphics graphics-items">
        <div class="graphics-item">
          <div class="header">Disabled</div>
          <div class="item-content">
              Disables all interactive graphics. Provides a simple, blog reading experience. Prefered for mobile devices, as screen sizes occlude most interactive graphics.
          </div>
        </div>
        <div class="graphics-item">
          <div class="header">Simple</div>
          <div class="item-content">
              Disables interaction for some elements such as particles. Post proccessing effects disabled. Preffered for a more simple experience while still keeping the environment provided by the 3D graphics.
          </div>
        </div>
        <div class="graphics-item">
          <div class="header">Medium <i>- Recommended</i></div>
          <div class="item-content">
              Everything enabled. Limited memory usage for post processing and certain interactable elements. Prefered for the intended 97° Cider experience.
          </div>
        </div>
        <div class="graphics-item">
          <div class="header">High</div>
          <div class="item-content">
              Everything enabled. Increase resource usage for certain effects. Prefered for higher end computers or those who wish to focus more on the interactive elements.
          </div>
        </div>
      </div>
    </overlay>
    <div class="content">
      <div class="intro" v-show="loaded" transition="slide-fade">
          <div class="intro-container">
              <div class="intro-header">97° Cider</div>
              <transition mode="out-in" name="slide-fade">
                  <div class="intro-item" v-bind:class="{ hidden: !delayedLoad }">
                      <div class="intro-desc">
                          Welcome to the 97° Cider! 
                          This website acts as a personal blog, of sort. Customize your experience and share with others!
                      </div>
                  </div>
              </transition>
              <transition mode="out-in" name="slide-fade">
                  <div class="intro-item" v-bind:class="{ hidden: !delayedLoadBody}">
                      <div class="intro-warning">
                          <div class="intro-warning-text">
                            Hey! This webiste contains interactive graphics and audio. If you are photosensitive or have a history of epilepsy, please take caution when browsing the site.<br>You can disable graphics and audio in the graphics setting below. Thanks!
                          </div>
                      </div>
                  </div>
              </transition>
              <transition mode="out-in" name="slide-fade">
                  <div class="intro-item" v-bind:class="{ hidden: !finalizeLoad}">
                      <div class="intro-header-2">
                          <span class="outline">Quality Settings</span>
                          <button class="more-info" v-on:click="toggleGraphicsOverlay" :disabled="isOverlayed" >?</button>
                      </div>
                      <div class="intro-quality"> 
                          <div class="quality-buttons"> 
                              <button class="intro-button" v-bind:class="{ disabled: compareToCurrentQuality('quality-disabled') }" v-on:click="selectQuality('quality-disabled')">Disabled</button>
                              <button class="intro-button" v-bind:class="{ disabled: compareToCurrentQuality('quality-simple') }" v-on:click="selectQuality('quality-simple')">Simple</button>
                              <button class="intro-button" v-bind:class="{ disabled: compareToCurrentQuality('quality-default') }" v-on:click="selectQuality('quality-default')">Medium</button>
                              <button class="intro-button" v-bind:class="{ disabled: compareToCurrentQuality('quality-high') }" v-on:click="selectQuality('quality-high')">High</button>
                          </div> 
                          <select v-model="targetQuality">
                             <option disabled value="">Quality</option>
                             <option value="quality-disabled">Disabled</option>
                             <option value="quality-simple">Simple</option>
                             <option value="quality-default">Default</option>
                             <option value="quality-high">High</option>
                           </select>
                      </div>

                  </div>
              </transition>
              <div class="intro-item enter">
                <div class="lower">
                  <transition name="fade">
                    <div class="rotated-icon"  v-show="!delayedLoad">
                      <img class="svg-icon" src="public/svgs/text-logo-full.svg">
                    </div>
                  </transition>
                  <transition name="slide-fade">
                    <div class="rotated-icon" v-show="delayedLoad">
                      <img class="svg-icon" src="public/svgs/text-logo.svg">
                    </div>
                  </transition>
                  <transition name="slide-fade">
                    <div class="rotated-icon outer" v-show="delayedLoadBody">
                      <img class="svg-icon" src="public/svgs/text-logo.svg">
                    </div>
                  </transition>
                  <transition name="slide-fade">
                    <div class="rotated-icon far-outer" v-show="finalizeLoad">
                      <img class="svg-icon" src="public/svgs/text-logo.svg">
                    </div>
                  </transition>
                </div>
                <button class="intro-button enter" v-on:click="navigateToCafe">Enter</button>
              </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import Overlay from '../components/Overlay.vue';
import conf from '../scripts/config';

export default {
  name: 'Intro',
  components: {
      Overlay
  },
  data () {
      return {
          loaded: true,
          delayedLoad: false,
          delayedLoadBody: false,
          finalizeLoad: false,
          isOverlayed: false,
          targetQuality: conf.quality.LOW,
      }
  },
  methods: {
      compareToCurrentQuality (name) {
        if(name == this.targetQuality) 
          return true;
        return false;
      },

      selectQuality (quality) {
        this.targetQuality = quality;
        console.log(this.targetQuality);
      },

      navigateToCafe() {
        this.$parent.setQualityLevel(this.targetQuality);
        this.$router.push('/cafe');
      },

      configureSettings () {
        this.$parent.setQualityLevel(this.targetQuality);
      },

      toggleGraphicsOverlay () {
        this.$refs.graphicsOverlay.toggleOverlay();
        this.isOverlayed = true;
        setTimeout( this.toggleDelayButton, 1000);
      },

      toggleDelayButton () {
        this.isOverlayed = false;
      },

      updateDelayedLoad () {
        this.delayedLoad = true;
      },

      updateDelayedBodyLoad () {
        this.delayedLoadBody = true;
      },

      finalizeDelayedLoad () {
        this.finalizeLoad = true;
      }
  },

  beforeMount () {
    console.log(this.$store.state.qualitySettings);
    this.targetQuality = this.$store.state.qualitySettings;
  },

  mounted () {
      setTimeout( this.updateDelayedLoad, 500);
      setTimeout( this.updateDelayedBodyLoad, 750);
      setTimeout( this.finalizeDelayedLoad, 1000);
  }
}
</script>

<style lang="scss">

@import "../scss/palettes.scss";

.content {
    overflow: auto;
    height: 100%;
}

.svg-leaf {
    position: absolute;
    z-index: -1;
    right: 0px;
    bottom: 0px;
    width: 20%;
    height: 30%;
    pointer-events: none;

    &.outer {
        right: -30px;
        opacity: 0.5;
    }

    &.mid {
        right: -60px;
        opacity: 0.2;
    }
}

.more-info {
    text-align: center;
    text-decoration: none;
    display: inline-block;

    background-color: $intro-light;
    color: $intro-dark;

    border-radius: 25px;
    border-width: 2px;
    border-color: $intro-dark;
    border-style: solid;

    font-size: 20px;

    margin: 4px 2px;
    cursor: pointer;
}

.intro-quality {
    .quality-buttons {
        padding: 0px;
        display: flex;
        justify-content: center;

        button {
            margin-right: 20px;
        }
    }
    select {
        display: none;
    }
}

.intro-bg {
    height: 100vh;
    width: 100vw;
    z-index: -10;
    position: absolute;

    .upper {
        height: 100vh;
        width: 100vw;
        z-index: -10;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;

        background: $intro-light;
    }
}

.lower {
    height: 100%;
    width: 100%;
    z-index: -9;
    position: absolute;
    left: 0;
    right: 0;
    top: 700px;
    background: url(../../public/svgs/wave-border-small.svg);
    background-size: auto 100%;
}

.intro {
    height: 90vh;
    min-width: 240px;
    min-height: 600px;
    display: flex;
    flex-direction: column;
    font-size: 40px;
    padding-left: 30%;
    padding-right: 30%;
    padding-top: 5%;
    color: $intro-dark;

    font-family: adobe-caslon-pro, serif;
    font-weight: 600;
    font-style: normal;
    font-size: 60px;
}

.intro-header {
    text-align: center;
    padding-top: 3%;
    padding-bottom: 3%;
}

.intro-header-2 {
    font-size: 28px;
    .outline {
        text-shadow: 0 0 1px $intro-light, 0 0 1px $intro-light, 0 0 1px $intro-light, 0 0 1px $intro-light;
    }
}

.intro-desc {
    font-size: 24px;
}

.intro-item {
    padding-top: 3%;
    padding-bottom: 3%;
    margin: 0 auto;

    min-height: 0;
    object-fit: contain;
    width: 100%;

    visibility: visible;
    opacity: 1;
    transition: visibility 0s linear 0s, opacity 300ms;

    &.hidden {
        visibility: hidden;
        opacity: 0;
        transition: visibility 0s linear 300ms, opacity 300ms;
    }

    &.enter {
        display: flex;
        justify-content: center;
        padding-top: 50px;
    }

    .rotated-icon {
        position: absolute;
        width: 800px;
        transform: rotateZ(90deg);
        left: -400px;
        top: -412px;

        &.outer {
            left: -375px;
            opacity: 0.5;
        }

        &.far-outer {
            left: -350px;
            opacity: 0.2;
        }
    }
}

.intro-button {
    font-size: 24px;
    color: $intro-dark;
    padding-left: 20px;
    padding-right: 20px;

    padding-top: 10px;
    padding-bottom: 10px;

    text-align: center;
    text-decoration: none;
    display: inline-block;

    background-color: $intro-light;

    border-radius: 5px;
    border-width: 1px;
    border-color: $intro-dark;
    border-style: solid;

    margin: 4px 2px;
    cursor: pointer;

    width: 100%;

    transition-duration: 0.4s;

    &:hover {
        background-color: $intro-dark;
        color: white;
    }

    &.disabled {
        cursor: not-allowed;
        pointer-events: none;
        background-color: $intro-dark;
        color: white;
    }

    &.enter {
        border-color: $intro-light;
        font-size: 30px;
        background-color: $intro;
        color: $intro-light;
        width: 50%;
        background: url(../../public/svgs/swirls-inverted.svg);
    }
}

@media screen and (max-width: 600px) {
    .intro{
        padding-left:10%;
        padding-right: 10%;
    }

    .intro-quality {
        .quality-buttons {
            display: none;
        }
        select {
            display: inline-block;
        }
    }

    .lower {
        display: none;
    }
}

@media screen and (max-height: 600px) {
    .intro {
        padding-top: 10px;
    }
    .lower {
        display: none;
    }
}

@media screen and (min-width: 600px) {
    .intro{
        padding-left:30%;
        padding-right: 30%;
    }
}

.intro-warning-text {
    padding: 10px;
}

.intro-warning {
    font-size: 18px;
    border-width: 1px;
    border-style: solid;
    border-radius: 7px;
    border-color: $intro-dark;
    color: $intro-dark;
    background: url(../../public/svgs/swirls-default.svg);
}

.graphics {
    &.header {
        color: $intro-light;
        font-size: 48px;
        padding-bottom: 20px;
    }

    &.highlight-container {
        color: $intro-light;
        font-size: 20px;
        
        border-width: 1px;
        border-radius: 7px;
        border-color: $intro-light;
        border-style: solid;

        background: url(../../public/svgs/swirls-inverted.svg);
        .highlight-text {
            padding: 10px;
        }
    }

    &.graphics-items {

        padding-top: 20px;

        display: flex;
        justify-content: center;
        flex-direction: column;

        .graphics-item {

            padding-top: 20px;

            .header {
                color: $intro-light;
                font-size: 28px;
                padding-bottom: 10px;
            }
            .item-content {
                font-size: 20px;
                padding-left: 10px;
                opacity: 0.9;
            }
        }
    }
}
</style>