import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
export default function CustomDialog({ open, handleClose, container, handleSubmit, setSelectedContainer }) {
    const handleChange = (e) => {
        setSelectedContainer({ ...container, containerImage: e.target.value });
    };
    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Edit Image</DialogTitle>
                <DialogContent>
                    <DialogContentText>Enter the new Image Name</DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="containerImage"
                        label="Container Image"
                        value={container.containerImage}
                        onChange={handleChange}
                        type="text"
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
