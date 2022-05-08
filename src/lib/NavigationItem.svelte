<script lang="ts">
  export let name: string;
  export let subItems: string[];
  let hidden = true;
</script>

<div class="navigation-item">
  <li on:mouseover={() => hidden = false} on:focus={() => hidden = false} on:mouseleave={() => hidden = true} class:show={!hidden}>{name}</li>
  <div on:mouseover={() => hidden = false} on:focus={() => hidden = false} on:mouseleave={() => hidden = true} class="subitems-wrapper" class:invisible={hidden}>
    <div class="subitems">
      {#each subItems as subItem}
        <a href="/home"><p>{subItem}</p></a>
      {/each}
    </div>
  </div>
</div>

<style lang="stylus">
.navigation-item 
  @apply relative;

  li
    @apply px-3 mx-3 nav-items cursor-pointer;

    &.show
      @apply bg-white text-black;

  .subitems-wrapper
    @apply pt-2 absolute top-8 left-1/2 transform -translate-x-1/2;
  
    .subitems
      @apply w-max flex flex-col gap-y-2 bg-white  p-3 border border-black rounded-lg;

      a
        @apply body-1 text-black;

        &:hover
          @apply underline;
</style>
