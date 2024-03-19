import Shortcut from '../../components/Home/Shortcut';
import Card from '../../components/Home/Card';
import Article from '../../components/Home/Article';
import QuickActions from '../../components/Home/QuickActions';

const generateShortcuts = (val, index) => (
  <Shortcut title={val.text} src={val.icon} key={index} />
);

const generateActions = val => (
  <QuickActions title={val.text} src={val.src} key={val.id} />
);

const renderCard = ({item}) => (
  <Card h1={item.h1} h2={item.h2} src={item.src} />
);

const renderArticle = ({item}) => (
  <Article heading={item.heading} detail={item.detail} src={item.src} />
);

const ComponentGenerator = {
  generateShortcuts,
  generateActions,
  renderArticle,
  renderCard,
};

export default ComponentGenerator;
