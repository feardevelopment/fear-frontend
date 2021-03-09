<script lang="ts">
  import type { EMail } from "static/types";
  export let email: EMail;
</script>

<tr class:read="{email.read}">
  <td>{email.from}</td>
  <td>{email.subject}</td>
  <td>{email.date}</td>
</tr>

<style lang="scss">
  tr {
    border: 1px solid red;

    &.read {
      border: 2px solid green;
    }
  }
</style>