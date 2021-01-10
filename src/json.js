const json = [
  {
    id: 1,
    parentId: null,
    index: 1,
    type: 'Row',
    props: {
      text: "txt 1"
    },
  },
  {
    id: 2,
    parentId: null,
    index: 2,
    type: 'Row',
    props: {
      text: "txt 2"
    },
  },
  {
    id: 3,
    parentId: 1,
    index: 1,
    type: 'Container',
    props: {
      padding: "20"
    },
  },
  {
    id: 4,
    parentId: 2,
    index: 1,
    type: 'Container',
    props: {
      padding: "20"
    },
  }
];

export default json;
