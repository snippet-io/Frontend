import React from "react";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const SnippetItem = ({
  title,
  datetime,
  description,
  author,
  calculateTimestamp,
}) => {
  return (
    <div>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar />
        </ListItemAvatar>

        <ListItemText
          primary={title}
          secondary={
            <React.Fragment>
              <Typography component="span" variant="body2" color="textPrimary">
                {calculateTimestamp(datetime)}
              </Typography>
              <br />
              {` - ${calculateTimestamp(datetime)}`}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </div>
  );
};

export default SnippetItem;
