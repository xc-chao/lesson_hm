<template>
    <div>
        ChildOne
        {{ msg1  }}
        {{ msg2  }}
        
    </div>
</template>

<script>
export default {
    props: {
        msg1: String,
        msg2: String
    }, 
    setup(props){
        console.log(props.msg1)
        console.log(props.msg2) 
        return {
            msg1: props.msg1,
            msg2: props.msg2 
        }
    }
}
</script>

<style scoped>

</style>