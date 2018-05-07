import { curry } from 'ramda';

const pad = (padder, string, num) => (
  String(string).padStart(num, padder)
);

const curriedPad = curry(pad);

const padZero = curriedPad('0');

export const secondsToTimestamp = (seconds = 0) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds - (hours * 3600)) / 60);
  const secs = Math.floor(seconds - (hours * 3600) - (minutes * 60));
  const ms = Math.floor((seconds - Math.floor(seconds)) * 1000);

  return `${padZero(hours, 2)}:${padZero(minutes, 2)}:${padZero(secs, 2)}:${padZero(ms, 3)}`;
};
