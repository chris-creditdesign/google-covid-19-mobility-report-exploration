<script>
  export let altText;
</script>

<style>
  .background-container--image {
    background-image: url("../img/diabetes-background-image.jpg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: inherit;
  }
  @media (max-width: 730px) {
    .background-container--image {
      background-image: url("../img/diabetes-background-image-600.jpg");
    }
  }
</style>

<div
  class="background-container background-container--image"
  role="img"
  aria-label="{altText}"
></div>
