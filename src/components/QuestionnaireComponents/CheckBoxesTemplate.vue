<template>
  <h1 class="nameQ1">{{ question.text }}</h1>
  <br />
  <div
    class="text-black font-poppins font-normal text-3xl not-italic leading-loose ml-[7rem]"
    v-for="(answer, i) in question.answers"
    :key="i"
  >
    <input
      class="mt-[35px] w-[35px] h-[32px] shadow-none"
      type="checkbox"
      :value="answer.value"
      id="{{answer.value}}"
    />
    <label
      class="mt-[35px] w-[35px] h-[32px] shadow-none"
      for="{{answer.value}}"
    >
      {{ answer.text }}</label
    >
    <br />
  </div>
</template>
<script>
export default {
  props: ["question"],
};
</script>
