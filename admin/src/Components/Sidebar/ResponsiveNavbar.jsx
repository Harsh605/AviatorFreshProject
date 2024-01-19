import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useNavigate } from "react-router-dom";

export default function TemporaryDrawer() {
  const navigate = useNavigate();

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const logo = [
    <img
      src="/assets/images/aviator2.png"
      alt="logo"
      style={{ width: "80px" }}
    />,
  ];

  const BarItem = [
    {
      name: "Dashboard",
      Icon: (
        <i
          style={{ fontSize: "25px" }}
          className="parent-icon icon-color-1 bx bx-home-alt"
        />
      ),
    },

    {
      name: "UserSection",
      Icon: (
        <i
          style={{ fontSize: "25px" }}
          className="bx bx-user parent-icon icon-color-2"
        ></i>
      ),
    },
    {
      name: "Recharge",
      Icon: (
        <i
          style={{ fontSize: "25px" }}
          className="bx bx-wallet parent-icon icon-color-5"
        ></i>
      ),
    },
    {
      name: "Withdrawal",
      Icon: (
        <i
          style={{ fontSize: "25px" }}
          className="bx bx-money-withdraw parent-icon icon-color-8"
        ></i>
      ),
    },
    {
      name: "Crashplaned",
      Icon: (
        <i
          style={{ fontSize: "25px" }}
          className="bx bx-task parent-icon icon-color-6"
        />
      ),
    },
    {
      name: "Bank",
      Icon: (
        <i
          style={{ fontSize: "25px" }}
          className="bx bxs-bank parent-icon icon-color-1 "
        ></i>
      ),
    },
    {
      name: "Refer",
      Icon: (
        <i
          style={{ fontSize: "25px" }}
          className="bx bx-group parent-icon icon-color-7"
        />
      ),
    },
  ];

  const handleListItemClick = (text) => {
    // Add your logic to navigate to the corresponding page
    switch (text) {
      case "Dashboard":
        navigate("/Dashboard"); // Replace '/home' with your actual home route
        break;
      case "UserSection":
        navigate("/UserSection"); // Replace '/about' with your actual about route
        break;
      case "Recharge":
        navigate("/Recharge"); // Replace '/about' with your actual about route
        break;

      case "Withdrawal":
        navigate("/Withdraw"); // Replace '/about' with your actual about route
        break;

      case "Crashplaned":
        navigate("/Crashplanned"); // Replace '/about' with your actual about route
        break;

      case "Bank":
        navigate("/Bank"); // Replace '/about' with your actual about route
        break;

      case "Refer":
        navigate("/Refer"); // Replace '/about' with your actual about route
        break;
      // Add more cases for other menu items
      default:
        break;
    }
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {logo.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {BarItem.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => handleListItemClick(text.name)}>
              <ListItemIcon>{text.Icon}</ListItemIcon>
              <ListItemText primary={text.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <i className="bx bx-menu" style={{ fontSize: "25px" }} />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
