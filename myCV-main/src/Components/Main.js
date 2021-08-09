import React from "react";
import { Box, Grid } from "@material-ui/core";
import { DateRange } from "@material-ui/icons";

const Main = (props) => {
  return (
    <Grid mt={5} className={props.classes.card}>
      <Grid
        item
        mt={5}
        md={7}
        xs={12}
        className={props.classes.cardChild}
        style={{ order: 1, [props.theme.breakpoints.up("sm")]: { order: 2 } }}
      >
        <Grid item xs={11} style={{ margin: "auto" }}>
          <Box mb={-2} color={props.theme.palette.primary.dark}>
            <h2>EDUCATION</h2>
          </Box>
          <Box
            borderTop={3}
            mb={3}
            borderColor={props.theme.palette.primary.dark}
          >
            <h3>Bachelor of Computing</h3>
            <Box mt={-2} mb={1} color={props.theme.palette.primary.main}>
              <strong>
                University of Greenwich (Vietnam) - Da Nang Campus, Vietnam
              </strong>
            </Box>
            <DateRange className={props.classes.icon} color="disabled" />
            2019 - Present
          </Box>
        </Grid>
        <Grid item xs={11} style={{ margin: "auto" }}>
          <Box mb={-2} color={props.theme.palette.primary.dark}>
            <h2>COURSES & CERTIFICATES</h2>
          </Box>
          <Box
            mt={2}
            borderTop={3}
            borderColor={props.theme.palette.primary.dark}
          >
            <h3>Try Django 1.11 // Python Web Development</h3>
            <Box mt={-2} mb={1} color={props.theme.palette.primary.main}>
              <strong>Udemy</strong>
            </Box>
            <DateRange className={props.classes.icon} color="disabled" />
             Nov 2020
          </Box>
          <Box
            mt={2}
            borderTop={3}
            borderColor={props.theme.palette.primary.light}
          >
            <h3>
              
The Complete Python Masterclass: Learn Python From Scratch
            </h3>
            <Box mt={-2} mb={1} color={props.theme.palette.primary.main}>
              <strong>Udemy</strong>
            </Box>
            <DateRange className={props.classes.icon} color="disabled" />
             Feb 2020
          </Box>
          <Box
            mt={2}
            borderTop={3}
            borderColor={props.theme.palette.primary.light}
          >
            <h3>Build real world application using ASP.NET Core MVC, Entity Framework Core and ASP.NET Core Identity.</h3>
            <Box mt={-2} mb={1} color={props.theme.palette.primary.main}>
              <strong>Udemy</strong>
            </Box>
            <DateRange className={props.classes.icon} color="disabled" />
             Nov 2020
          </Box>
        </Grid>
        <Grid item xs={11} style={{ margin: "auto" }}>
          <Box mb={-2} color={props.theme.palette.primary.dark}>
            <h2>PROJECTS</h2>
          </Box>
          <Box
            mt={2}
            borderTop={3}
            borderColor={props.theme.palette.primary.dark}
          >
            <h3>Online Library</h3>
            <Grid item style={{ marginBottom: 25 }}>
              <Box mt={-1} mb={1} color={props.theme.palette.primary.main}>
                <strong>
                  Social media, events and tasks management application for
                  Family members
                </strong>
              </Box>
              <DateRange className={props.classes.icon} color="disabled" />
              05/2021 - 06/2021
              <Box mt={1}>
                <li>
                  <strong>Technologies:</strong> C#, dotnet, html, css, JavaScript
                </li>
                <li>
                  <strong>Personal project</strong>
                </li>
                <li>
                  <strong>Repository URL: </strong>{" "}
                  <a
                    href="https://github.com/buingochuy124/Online-Library"
                    target="_blank"
                    rel="noreferrer"
                  >
                    github.com/hieuhuynh1752/myFamily
                  </a>
                </li>
                <li>
                  <strong>Description:</strong>
                </li>
                <li style={{ listStyle: "none", marginLeft: "1.45rem" }}>
                  An application for users for control the infomation about books and document of Library
                </li>
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Grid>
      <Grid
        item
        md={5}
        xs={12}
        style={{
          marginTop: "-1.25rem",
          order: 2,
          [props.theme.breakpoints.up("sm")]: { order: 1 },
        }}
      >
        <Grid
          item
          md={11}
          mt={0}
          xs={12}
          className={props.classes.cardChild}
          style={{}}
        >
          <Box
            mb={-2}
            color="white"
            bgcolor={props.theme.palette.primary.main}
            style={{
              borderTopLeftRadius: "1rem",
              borderTopRightRadius: "1rem",
            }}
          >
            <div style={{ margin: "auto", width: "90%" }}>
              <h2>SUMMARY</h2>
            </div>
          </Box>
          <Grid item style={{ margin: "auto", width: "90%", height: "100%" }}>
          not much experience. <br />
            
Eager to apply back-end concepts to improve satisfaction for clients and end users.
          </Grid>
        </Grid>
        <Grid item md={11} mt={0} xs={12} className={props.classes.cardChild}>
          <Box
            mb={-2}
            color="white"
            bgcolor={props.theme.palette.primary.main}
            style={{
              borderTopLeftRadius: "1rem",
              borderTopRightRadius: "1rem",
            }}
          >
            <div style={{ margin: "auto", width: "90%" }}>
              <h2>SKILLS</h2>
            </div>
          </Box>
          <Grid item style={{ margin: "auto", width: "90%", height: "100%" }}>
            <Grid item>
              <Box mt={3} color={props.theme.palette.primary.main}>
                <div style={{ marginTop: "-1.25rem", marginBottom: "-1rem" }}>
                  <h3>Languages</h3>
                </div>
              </Box>
              <Box mb={1}>
                <li>
                  <strong>English</strong> - Proficient
                </li>
                <li>
                  <strong>Vietnamese</strong> - Native
                </li>
              </Box>
              <Box
                borderTop={3}
                borderColor={props.theme.palette.primary.light}
                color={props.theme.palette.primary.main}
              >
                <div style={{ marginTop: "-1rem", marginBottom: "-1rem" }}>
                  <h3>Programming Languages</h3>
                </div>
              </Box>
              <Box mb={1}>
                <li>
                  <strong>Python</strong>
                </li>
                <li>
                  <strong>java</strong>
                </li>
                <li>
                  <strong>C#</strong>
                </li>
              </Box>
              <Box
                borderTop={3}
                borderColor={props.theme.palette.primary.light}
                color={props.theme.palette.primary.main}
              >
                <div style={{ marginTop: "-1rem", marginBottom: "-1rem" }}>
                  <h3>Web technologies</h3>
                </div>
              </Box>
              <Box mb={1}>
                <li>
                  <strong>Dotnet</strong>
                </li>
                <li>
                  <strong>Django</strong>
                </li>
              </Box>
              <Box
                borderTop={3}
                borderColor={props.theme.palette.primary.light}
                color={props.theme.palette.primary.main}
              >
                <div style={{ marginTop: "-1rem", marginBottom: "-1rem" }}>
                  <h3>Tools</h3>
                </div>
              </Box>
              <Box mb={1}>
                <li>
                  <strong>Resource Management</strong>: Git, Github
                </li>
                <li>
                  <strong>Workflow Management</strong>:  Slack
                </li>
                <li>
                  <strong>Environment</strong>: Dotnet,Django,
                </li>
                <li>
                  <strong>Database</strong>: mySQL
                </li>
              </Box>
              <Box
                borderTop={3}
                borderColor={props.theme.palette.primary.light}
                color={props.theme.palette.primary.main}
              >
                <div style={{ marginTop: "-1rem", marginBottom: "-1rem" }}>
                  <h3>Development Process</h3>
                </div>
              </Box>
              <Box mb={1} mt={-3}>
                <Grid className={props.classes.container}>
                  <Grid item style={{ marginRight: "auto" }}>
                    <Box className={props.classes.box}>
                      {/* <li>
                        <strong>Scrum</strong>
                      </li> */}
                    </Box>
                  </Grid>
                  <Grid item style={{ marginRight: "auto" }}>
                    <Box className={props.classes.box}>
                      {/* <li>
                        <strong>Waterfall</strong>
                      </li> */}
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={11} mt={0} xs={12} className={props.classes.cardChild}>
          <Box
            mb={-2}
            color="white"
            bgcolor={props.theme.palette.primary.main}
            style={{
              borderTopLeftRadius: "1rem",
              borderTopRightRadius: "1rem",
            }}
          >
            <div style={{ margin: "auto", width: "90%" }}>
              <h2>ACHIEVEMENTS</h2>
            </div>
          </Box>
          <Grid item style={{ margin: "auto", width: "90%", height: "100%" }}>
            <Grid item>
              <Box mt={1} color={props.theme.palette.primary.main}>
                <div style={{ marginTop: "-1rem", marginBottom: "-1rem" }}>
                  <h3>Personal achievements</h3>
                </div>
              </Box>
              <Box mb={1}>
                <li>
                  {" "}
                  <strong>
                  top 22 GOTCHA CORONA CHALLENGE START-UP CONTEST RESULTS
24 hours coding game for IT students nationwide.
                  </strong> <br /> University of Greenwich (Vietnam) - Da Nang
                  campus
                </li>
                {/* <li>
                  <strong>Best Student of Spring Semester 2019</strong> <br />{" "}
                  University of Greenwich (Vietnam) - Da Nang campus
                </li>
                <li>
                  <strong>Best Student of Fall Semester 2018</strong> <br />{" "}
                  University of Greenwich (Vietnam) - Da Nang campus
                </li> */}
              </Box>
              <Box
                borderTop={3}
                borderColor={props.theme.palette.primary.light}
                color={props.theme.palette.primary.main}
              >
                <div style={{ marginTop: "-1rem", marginBottom: "-1rem" }}>
                  <h3>Team achievements</h3>
                </div>
              </Box>
              <Box>
                {/* <li>
                  {" "}
                  <strong>
                    Top 10 Team at Vietnam Online Hackathon 2020
                  </strong>{" "}
                  <br /> Google Developers Group Mien Trung - DNES
                </li>
                <li>
                  {" "}
                  <strong>Finals at FPT Edu Hackathon 2019</strong> <br /> FPT
                  Education
                </li> */}
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={11} mt={0} xs={12} className={props.classes.cardChild}>
          <Box
            mb={-2}
            color="white"
            bgcolor={props.theme.palette.primary.main}
            style={{
              borderTopLeftRadius: "1rem",
              borderTopRightRadius: "1rem",
            }}
          >
            <div style={{ margin: "auto", width: "90%" }}>
              <h2>INTERESTS</h2>
            </div>
          </Box>
          <Grid item style={{ margin: "auto", width: "90%", height: "14rem" }}>
            <Grid item>
              <Box mt={3} mb={-1} color={props.theme.palette.primary.main}>
                <h3>Sports</h3>
              </Box>
              <Box>
                <li>Swimming</li>
                <li>Badminton</li>
              </Box>
              <Box
                mb={1}
                mt={2}
                borderTop={3}
                borderColor={props.theme.palette.primary.light}
                color={props.theme.palette.primary.main}
              >
                {/* <h3>Musical instruments</h3> */}
              </Box>
              <Box>
                {/* <li>Modern Piano</li>
                <li>Acoustic Guitar</li> */}
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Main;
