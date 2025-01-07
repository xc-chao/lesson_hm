import {ref,onMounted,onUnmounted} from 'vue'
export function useMouse(){
    let x = ref(0);
    let y = ref(0);
    console.log("useMouse");
    function update(e){
        x.value = e.pageX;//e.pageX是鼠标的x坐标
        y.value = e.pageY;
        console.log('我还在...')
    }
    onMounted(()=>{
        window.addEventListener('click',update);
    })
    onUnmounted(()=>{
        console.log('我被销毁了...')
        window.removeEventListener('click',update);
    })
    return {
        x,
        y
    }
}

export function useMemo(){
    console.log("useMemo");
}

export default{
    name:useMouse,
}