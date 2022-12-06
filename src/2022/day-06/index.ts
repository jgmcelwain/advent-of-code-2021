import { getInput } from '@/lib/getInput';
import { runDay } from '@/lib/runDay';

export const PACKET_MARKER_SIZE = 4;
export const MESSAGE_MARKER_SIZE = 14;

export function getMarkerPosition(dataStream: string[], markerSize: number) {
  for (let i = 0; i < dataStream.length - (markerSize - 1); i++) {
    const substr = dataStream.slice(i, i + markerSize);

    if (new Set(substr).size === markerSize) {
      return i + markerSize;
    }
  }

  throw new Error('No marker detected');
}

function partOne(dataStream: string[]) {
  const result = getMarkerPosition(dataStream, PACKET_MARKER_SIZE);

  return result;
}

function partTwo(dataStream: string[]) {
  const result = getMarkerPosition(dataStream, MESSAGE_MARKER_SIZE);

  return result;
}

async function main() {
  const input = await getInput(__dirname);
  const dataStream = input.split('');

  void runDay(
    2022,
    6,
    'Tuning Trouble',
    () => partOne(dataStream),
    () => partTwo(dataStream),
    true,
  );
}

if (process.argv.includes('run')) {
  void main();
}
