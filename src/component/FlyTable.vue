<script>
export default {
  name: 'FlyTable',
  props: {
    fields: {
      type: Array,
      default() {
        return []
      }
    },
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    reverse() {
      this.goods.reverse();
    }
  },
  render(createElement) {
    return createElement('div', {
      slot: 'fly-table'
    }, [
      createElement('h2', this.$slots.title),
      createElement('button', {
        class: ['btn', 'btn-text'],
        attrs: {
          disabled: false,
          title: '点击使数组倒序'
        },
        domProps: {
          innerText: '倒序'
        },
        on:{
          click:() => {
            this.goods.reverse();
          }
        },
        directives:[],
        key:'btnReverse',
        ref:'btnReverse'
      }),
      createElement('table', {
        style:{
          width:'400px',
          textAlign:'left',
          lineHeight:'42px',
          border:'1px solid #eee',
          userSelect:'none'
        }
      },[
        createElement('tr',[
          this.fields.map(field => createElement('th',field.prop))
        ]),
        this.goods.map(item => createElement('tr',{
          style:{
            color:item.isMarked ? '#ea4335' : ''
          }
        }, this.fields.map(field => createElement('td', {
          style: {
            borderTop: '1px solid #eee'
          }
        }, [
          field.prop !== 'operate' 
            ? createElement('span', item[field.prop])
            : createElement('button', {
              class: ['btn', 'btn-text'],
              domProps: {
                innerHTML: '<span>切换标记</span>'
              },
              on: {
                click:() => {
                  item.isMarked = !item.isMarked
                }
              }
            })
        ]))))
      ]),
    ]);
  }
}
</script>