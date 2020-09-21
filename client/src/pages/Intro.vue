<template>
  <div id="app">
    <div class="intro-bg-elements">
        <!-- <transition name="fade">
        <svg class="svg-text" v-show="!delayedLoad" preserveAspectRatio="none" viewBox="0 0 500 500">
                <text class="inner-pre" transform="rotate(90)" y="-5" x="0">97° Cider</text>
            </svg>
        </transition>
        <transition name="slide-fade">
            <svg class="svg-text" v-show="delayedLoad" preserveAspectRatio="none" viewBox="0 0 500 500">
                <text class="inner" transform="rotate(90)" y="-5" x="0">97° Cider</text>
            </svg>
        </transition> -->
        <!-- <transition name="slide-fade">
            <svg class="svg-text" v-show="delayedLoadBody" preserveAspectRatio="none" viewBox="0 0 500 500">
                <text class="outer" transform="rotate(90)" y="-15" x="10">97° Cider</text>
            </svg>
        </transition>
        <transition name="slide-fade">
            <svg class="svg-text" v-show="finalizeLoad" preserveAspectRatio="none" viewBox="0 0 500 500">
                <text class="far-outer" transform="rotate(90)" y="-25" x="20">97° Cider</text>
            </svg>
        </transition> -->
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
    <overlay ref="graphicsOverlay"> pogger </overlay>
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
                              <button class="intro-button">Disabled</button>
                              <button class="intro-button">Low</button>
                              <button class="intro-button">Medium</button>
                              <button class="intro-button">High</button>
                          </div> 
                          <select> 
                              <option value="" selected="selected">Select</option> 
                              <option value="disabled">Disabled</option> 
                              <option value="low">Low</option> 
                              <option value="medium">Medium</option> 
                              <option value="high">High</option> 
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
                <router-link to="/cafe" tag="button" class="intro-button enter">Enter</router-link>
              </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import Overlay from '../components/Overlay.vue';
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
      }
  },
  methods: {
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
  mounted () {
      setTimeout( this.updateDelayedLoad, 500);
      setTimeout( this.updateDelayedBodyLoad, 750);
      setTimeout( this.finalizeDelayedLoad, 1000);
  }
}
</script>

<style lang="scss">
.content {
    overflow: auto;
    height: 100%;
}
.svg-text {
    position: absolute;
    z-index: 0;
    left: 0px;
    right: 0px;
    top: 0px;
    font-family: adobe-caslon-pro, serif;
    font-weight: 600;
    font-style: normal;
    font-size: 60px;
    pointer-events: none;
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

    background-color: #ddcae3;
    color: #494648;

    border-radius: 25px;
    border-width: 2px;
    border-color: #494648;
    border-style: solid;

    font-size: 20px;

    margin: 4px 2px;
    cursor: pointer;
}

text {
    fill: none;
    stroke:  #494648;
    stroke-width:0.2px;
    stroke-linejoin: round;
    pointer-events: none;
}

.inner {
    stroke: #494648;
}

.inner-pre {
    stroke: none;
    fill: #49464834;
}

.outer {
    stroke: #494648b2;
}

.far-outer {
    stroke: #4946485b;
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

        background: #ddcae3;
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
    color: #494648;

    font-family: adobe-caslon-pro, serif;
    font-weight: 600;
    font-style: normal;
    font-size: 60px;
}

.intro-bg-header {
    color: transparent;
    font-size: 180px;
    position: absolute;
    z-index: -10;
    left: 0px;
    right: 0px;

    font-family: adobe-caslon-pro, serif;
    font-weight: 600;
    font-style: normal;

    text-shadow:-1px 1px 0 #000,
                 1px 1px 0 #000,
                 1px -1px 0 #000,
                -1px -1px 0 #000;

}

.intro-header {
    text-align: center;
    padding-top: 3%;
    padding-bottom: 3%;
}

.intro-header-2 {
    font-size: 28px;
    .outline {
        text-shadow: 0 0 1px #ddcae3, 0 0 1px #ddcae3, 0 0 1px #ddcae3, 0 0 1px #ddcae3;
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
    color: #494648;
    padding-left: 20px;
    padding-right: 20px;

    padding-top: 10px;
    padding-bottom: 10px;

    text-align: center;
    text-decoration: none;
    display: inline-block;

    background-color: #ddcae3;

    border-radius: 5px;
    border-width: 1px;
    border-color: #494648;
    border-style: solid;

    margin: 4px 2px;
    cursor: pointer;

    width: 100%;

    transition-duration: 0.4s;

    &:hover {
        background-color: #494648;
        color: white;
    }

    &.enter {
        border-color: #ddcae3;
        font-size: 30px;
        background-color: #606060;
        color: #ddcae3;
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
    border-color: #494648;
    color: #494648;
    background: url(../../public/svgs/swirls-default.svg);
}
</style>