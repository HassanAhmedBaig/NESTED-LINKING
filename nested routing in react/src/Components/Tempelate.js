
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Accounting from "./Accounting";
import Analysis from "./Analysis";
import Messages from "./Messages";
import Profile from "./Profile";
import Projects from "./Projects";
import { useNavigate } from "react-router-dom";
import Settings from "./Settings";
import Info from "./Info";





const drawerWidth = 240;
const Tempelate = () => {
    const navigate = useNavigate("");
    const Navigation = (path) =>{
// const [listtext,setListText] = useState("")
navigate(`${path}`)
console.log(path);
      // navigate(`/tempelate/Dashboard`)
      // navigate(`/tempelate/Profile`)
      // navigate(`/tempelate/Analysis`)
      // navigate(`/tempelate/Accounting`)
      // navigate(`/tempelate/Messages`)
      // navigate(`/tempelate/Projects`)
    } 
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              NESTED  ROUTING
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: "auto" }}>
            <List>
              {[
                "Dashboard",
                "Profile",
                "Analysis",
                "Accounting",
                "Messages",
                "Projects",
              ].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton onClick={() => {Navigation(text)}}>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider />
            <List sx={{ paddingTop: 40 }}>
              {["Settings", "Info"].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton onClick={() => {Navigation(text)}}>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="Accounting" element={<Accounting />}></Route>
            <Route path="Analysis" element={<Analysis />}></Route>
            <Route path="Profile" element={<Profile />}></Route>
            <Route path="Projects" element={<Projects />}></Route>
            <Route path="Messages" element={<Messages />}></Route>
             <Route path="Settings" element={<Settings />}></Route>
            <Route path="Info" element={<Info />}></Route>
          </Routes>
        </Box>
      </Box>
    </div>
  );
};

export default Tempelate;
