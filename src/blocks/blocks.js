// import data from '../jsons/data-temporary.json';
import data from '../jsons/data-pm.json';
import List from '../components/list';
import Messages from '../components/chat/messages/Messages';
import UserMessages from '../components/chat/user/UserMessages';
import MarkdownString from '../components/markdownString/MarkdownString';
import Tasks from '../components/tasks/Tasks';

console.log({ ...data.block1 });

export const blocks = [
  {
    id: 1,
    props: { ...data.block1 },
    component: <List />,
    visible: true,
  },
  {
    id: 2,
    props: { ...data.block2 },
    component: <MarkdownString />,
    visible: false,
  },
  {
    id: 3,
    props: { message: data.block3 },
    component: <Messages />,
    visible: false,
  },
  {
    id: 4,
    props: { message: data.block4 },
    component: <Messages />,
    visible: false,
  },
  {
    id: 5,
    props: { message: data.block5 },
    component: <UserMessages />,
    visible: false,
  },
  {
    id: 6,
    props: { message: data.block6 },
    component: <Messages />,
    visible: false,
  },
  {
    id: 7,
    props: { message: data.block7 },
    component: <UserMessages />,
    visible: false,
  },
  {
    id: 8,
    props: { ...data.block8 },
    component: <MarkdownString />,
    visible: false,
  },
  {
    id: 9,
    props: { ...data.block9 },
    component: <List />,
    visible: false,
  },
  {
    id: 10,
    props: { ...data.block10 },
    component: <Tasks />,
    visible: false,
  },
];
