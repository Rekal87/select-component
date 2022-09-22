import {
  Autocomplete,
  Box,
  Button,
  Container,
  Divider,
  List,
  ListItem,
  TextField,
} from '@mui/material';

type SelectOption = {
  label: string;
  value: any;
};

type SelectProps = {
  options: SelectOption[];
  onChange: (value: SelectOption | undefined) => void;
  value?: SelectOption;
};

export default function Select({ value, onChange, options }: SelectProps) {
  return (
    <div>
      <Container maxWidth='sm'>
        <Box mt={3}>
          <Autocomplete
            disablePortal
            id='combo-box-demo'
            options={options}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label='First' />}
          />
        </Box>
      </Container>
    </div>
  );
}
