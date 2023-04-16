import { ShoppingCart } from "@mui/icons-material"
import { Stack } from "@mui/system"

const Cart = () => {
    return(
        <div>
            <Stack spacing={2} sx={{
                bgcolor : "grey",
                width : "100%"
            }}><Stack sx={{
                bgcolor : "lightblue"
            }}><ShoppingCart /></Stack></Stack>
        </div>
    )
}

export default Cart