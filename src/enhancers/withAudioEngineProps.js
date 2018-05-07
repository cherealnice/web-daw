const audioEngineProps = {
  sampleRate: 44100,
  bitRate: 16,
};

const withAudioEngineProps = Component => props => (
  <Component {...{
    ...audioEngineProps,
    ...props,
  }} />
);
