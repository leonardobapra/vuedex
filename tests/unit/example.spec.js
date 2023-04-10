import { mount } from  '@vue/test-utils'
import App from  '@/App.vue'
import {huevo, espinaca} from  "./jestTest";

const  wrapper = mount(App)
const  vm = wrapper.vm
console.log(vm.$data)

describe('Se va a probar la calidad de los ingredientes',() => {
  test('Calidad del huevo', ()  => {
    expect(huevo().estado[0]).toBe('fresco')
  });

  test('Calidad de la espinaca', ()  => {
    expect(espinaca()).toEqual({
      estado: 1,
      color: "verde"
    })

  });

})

describe('Probar que se cambió la propiedad changeTest ', () => {
  test('should click a button', () => {
  const lastValue = wrapper.vm.changeTest
  wrapper.find('button').trigger('click')
  expect(wrapper.vm.changeTest).toBe(lastValue+1)

})

})
