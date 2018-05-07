const typeToColor = {
  play: 'green',
  stop: 'red',
  pause: 'orange',
};

const typeToAscii = {
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
