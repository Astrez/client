import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
export default function ReplicasDialog({ open, handleClose, value, handleSubmit, editReplica }) {
    const handleChange = (e) => {
        editReplica(e.target.value);
    };
    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Edit Replicas</DialogTitle>
                <DialogContent>
                    <DialogContentText>Enter required amount of Replicas</DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="replicas"
                        label="Replicas"
                        value={value}
                        onChange={handleChange}
                        type="number"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit}>Submit</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
