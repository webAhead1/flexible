<template>
  <h1 class="nameQ1">{{ question.text }}</h1>
  <br />
  <div
    class="text-black font-poppins font-normal text-3xl not-italic leading-loose ml-[7rem] mt-[35px]"
    v-for="(answer, i) in question.answers"
    :key="i"
  >
    <input
      class="mr-[10px] border-none w-[35px] h-[32px] shadow-none"
      type="radio"
      name="radio-answer"
      :value="answer.value"
      :id="answer.value"
    />
    <label class="radio" :for="answer.value"> {{ answer.text }}</label>
    <br />
  </div>
</template>
<script>
export default {
  props: ["question"],
};
</script>
