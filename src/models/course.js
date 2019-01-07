export default {
    state: {
      underline: {
        categories: [
          {
            value: 0,
            label: '中餐'
          },
          {
            value: 1,
            label: '西餐'
          },
          {
            value: 2,
            label: '料理'
          }
        ],
        list: [{
          id: '0',
          title: 'test1test1test1test1test1test1test1test1test1test1test1test1test1',
          cover: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
          category: 0
        }, {
          id: '1',
          title: 'test2',
          cover: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
          category: 0
        }, {
          id: '2',
          title: 'test3',
          cover: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
          category: 1
        }, {
          id: '3',
          title: 'test4',
          cover: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
          category: 2
        }]
      }
    },
  
    effects: {
    },
  
    reducers: {
    },
  };
  