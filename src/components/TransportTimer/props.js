import { secondsToTimestamp } from '../../helpers';

const getChildren = ({ currentSample, sampleRate }) => (
  secondsToTimestamp(currentSample / sampleRate)
);

const propsMapper = props => ({
  ...props,
  children: getChildren,
});

export default propsMapper;