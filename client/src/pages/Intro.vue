<template>
  <div id="app">
      <div class="intro">
        <div class="intro-header">97° Cider</div>
        <div class="intro-item">
            <div class="intro-desc">
                Welcome to the 97° Cider! 
                This website acts as a personal blog, of sort. Customize your experience and share with others!
            </div>
        </div>
        <div class="intro-item">
            <div class="intro-warning">
                Hey! This webiste contains interactive graphics and audio. If you are photosensitive or have a history of epilepsy, please take caution when browsing the site.<br>You can disable graphics and audio in the graphics setting below. Thanks!
            </div>
        </div>
        <div class="intro-item">
            <router-link to="/cafe" tag="button" class="intro-button">Enter</router-link>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Intro',
}
</script>

<style lang="scss">

.intro {
    height: 100vh;
    widows: 100vw;
    font-size: 40px;
    padding-left: 30%;
    padding-right: 30%;
    padding-top: 10%;
    display: flex;
    flex-direction: column;
    color: #494648;

    background: rgb(245,235,252);
    background: -moz-linear-gradient(180deg, rgba(245,235,252,1) 0%, rgba(238,218,255,1) 21%, rgba(220,201,228,1) 73%, rgba(199,172,212,1) 100%);
    background: -webkit-linear-gradient(180deg, rgba(245,235,252,1) 0%, rgba(238,218,255,1) 21%, rgba(220,201,228,1) 73%, rgba(199,172,212,1) 100%);
    background: linear-gradient(180deg, rgba(245,235,252,1) 0%, rgba(238,218,255,1) 21%, rgba(220,201,228,1) 73%, rgba(199,172,212,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#f5ebfc",endColorstr="#c7acd4",GradientType=1);
}

.intro-header {
    text-align: center;
    padding-top: 3%;
    padding-bottom: 3%;
}

.intro-desc {
    font-size: 24px;
}

.intro-item {
    padding-top: 3%;
    padding-bottom: 3%;
    margin: 0 auto;
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

    background-color: Transparent;

    border-radius: 5px;
    border-width: 1px;
    border-color: #494648;
    border-style: solid;

    margin: 4px 2px;
    cursor: pointer;
}

@media screen and (max-width: 600px){
    .intro{
        padding-left:10%;
        padding-right: 10%;
        padding-top: 10%;
    }
}

.intro-warning {
    font-size: 18px;
    padding: 10px;
    border-width: 1px;
    border-style: solid;
    border-radius: 7px;
    border-color: #494648;
}

</style>