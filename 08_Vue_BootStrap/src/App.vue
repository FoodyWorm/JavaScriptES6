<template>
  <div>
    <h2>- 자기소개 리스트 -</h2>
    <b-list-group>
      <b-list-group-item>Cras justo odio</b-list-group-item>
      <b-list-group-item>Vue is very hard</b-list-group-item>
      <b-list-group-item>I am a programer</b-list-group-item>
      <b-calendar></b-calendar>
      <b-embed
      type="iframe"
      aspect="16by9"
      src="https://www.youtube.com/watch?v=s08vA5BPzIA"
      allowfullscreen></b-embed>
    </b-list-group>
    
    <b-button>전송하기</b-button>

  </div>
</template>

<script>
export default {
  
}
</script>

<style>
  body {
    margin: 30px;
  }
</style>
