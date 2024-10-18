import { Stack, TextField, Typography } from '@mui/material';
import Test from './Test';

// if (import.meta.hot) {
//   import.meta.hot.invalidate();
// }

export default function App() {
  return (
    <div>
      <Typography>Hello World</Typography>
      <Typography>AHorassx</Typography>
      <Stack spacing={2} gap={2}>
        <TextField placeholder='React TTT' color='error' focused />
        <TextField placeholder='React TTT' color='primary' focused />
      </Stack>
      <Test />
    </div>
  );
}
