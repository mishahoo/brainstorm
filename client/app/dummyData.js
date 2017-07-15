export const commentsdummyData = [{
    _id: '101',
    parent_id: 'root',
    children: ['202', '303', '404'],
    creator_id: 'abc',
    session_id: 'xyz',
    title: 'root node',
    text: 'testing the root',
    upvotes: [],
    downvotes:[],
    score:0
  },
  {
    _id: '202',
    parent_id: '101',
    children: ['505'],
    creator_id: 'def',
    session_id: 'xyz',
    title: 'child #1',
    text: 'first child of root',
    upvotes: [],
    downvotes:[],
    score:0
  },
  {
    _id: '303',
    parent_id: '101',
    children: [],
    creator_id: 'ghi',
    session_id: 'xyz',
    title: 'child #2',
    text: 'second child of root',
    upvotes: [],
    downvotes:[],
    score:0
  },
  {
    _id: '404',
    parent_id: '101',
    children: [],
    creator_id: 'jkl',
    session_id: 'xyz',
    title: 'child #3',
    text: 'third child of root',
    upvotes: [],
    downvotes:[],
    score:0
  },
  {
    _id: '505',
    parent_id: '202',
    children: [],
    creator_id: 'mno',
    session_id: 'xyz',
    title: 'grandchild #1',
    text: 'first child of child #1',
    upvotes: [],
    downvotes:[],
    score:0
  },
  {
    _id: '606',
    parent_id: '202',
    children: [],
    creator_id: 'pqr',
    session_id: 'xyz',
    title: 'grandchild #2',
    text: 'second child of child #1',
    upvotes: [],
    downvotes:[],
    score:0
  }]
