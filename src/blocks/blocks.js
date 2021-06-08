// import data from '../jsons/data-temporary.json';
import data from '../jsons/data-pm.json';
import List from '../components/list';
import Messages from '../components/chat/messages/Messages';
import UserMessages from '../components/chat/user/UserMessages';
import MarkdownString from '../components/markdownString/MarkdownString';
import Tasks from '../components/tasks/Tasks';
import Task4 from '../components/tasks/Task4';
import MarkdownBlock from '../components/markdownBlock';
import ResultSimulator from '../components/resultSimulator/ResultSimulator';
import IconDone from '../components/iconDone/IconDone';

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
  {
    id: 11,
    props: { ...data.block11 },
    component: <MarkdownBlock />,
    visible: false,
  },
  {
    id: 12,
    props: { ...data.block12 },
    component: <Tasks />,
    visible: false,
  },
  {
    id: 13,
    props: { ...data.block13 },
    component: <MarkdownString />,
    visible: false,
  },
  {
    id: 14,
    props: { message: data.block14 },
    component: <UserMessages />,
    visible: false,
  },
  {
    id: 15,
    props: { message: data.block15, liza: true },
    component: <Messages />,
    visible: false,
  },
  {
    id: 16,
    props: { message: data.block16 },
    component: <UserMessages />,
    visible: false,
  },
  {
    id: 17,
    props: { message: data.block17, liza: true },
    component: <Messages />,
    visible: false,
  },
  {
    id: 18,
    props: { message: data.block18, liza: true },
    component: <Messages />,
    visible: false,
  },
  {
    id: 19,
    props: { message: data.block19, liza: true },
    component: <Messages />,
    visible: false,
  },
  {
    id: 20,
    props: { message: data.block20 },
    component: <UserMessages />,
    visible: false,
  },
  {
    id: 21,
    props: { message: data.block21, liza: true },
    component: <Messages />,
    visible: false,
  },
  {
    id: 22,
    props: { message: data.block22 },
    component: <UserMessages />,
    visible: false,
  },
  {
    id: 23,
    props: { message: data.block23, liza: true },
    component: <Messages />,
    visible: false,
  },
  {
    id: 24,
    props: { message: data.block24 },
    component: <UserMessages />,
    visible: false,
  },
  {
    id: 25,
    props: { ...data.block25 },
    component: <MarkdownString />,
    visible: false,
  },
  {
    id: 26,
    props: { ...data.block26 },
    component: <Tasks />,
    visible: false,
  },
  {
    id: 27,
    props: { ...data.block27 },
    component: <Task4 />,
    visible: false,
  },
  {
    id: 28,
    props: { message: data.block28 },
    component: <UserMessages />,
    visible: false,
  },
  {
    id: 29,
    props: { message: data.block29 },
    component: <Messages />,
    visible: false,
  },
  {
    id: 30,
    props: { message: data.block30 },
    component: <UserMessages />,
    visible: false,
  },
  {
    id: 31,
    props: { ...data.block31 },
    component: <MarkdownString />,
    visible: false,
  },
  {
    id: 32,
    props: { ...data.block32 },
    component: <ResultSimulator />,
    visible: false,
  },
  {
    id: 33,
    component: <IconDone />,
    visible: false,
  },
];
