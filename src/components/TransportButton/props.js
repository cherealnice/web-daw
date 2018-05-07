const typeToColor = {
  record: 'red',
  play: 'green',
  stop: 'blue',
  pause: 'orange',
};

const typeToAscii = {
  record: '●',
  play: '►',
  pause: '| |',
  stop: '■',
};

const renderChildren = type => typeToAscii[type];

const propsMapper = props => ({
  ...props,
  children: renderChildren,
  color: typeToColor[props.type],
});

export default propsMapper;
