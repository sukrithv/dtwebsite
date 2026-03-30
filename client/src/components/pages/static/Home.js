import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./static.css";

class Home extends Component {
  componentDidMount() {
    document.title = "Home";
  }

  render() {
    const { bgOpacity } = this.props;
    return (
      <div id="home-page">
        <div className="quote" style={{ opacity: bgOpacity }}>
          DanceTroupe is one of the largest dance organizations at MIT,
          bringing a unique variety of styles to the community.
        </div>

        <div className="static-page">
          <h1>About</h1>
              <p>
                Founded in 1994, the MIT DanceTroupe is the largest dance organization
                at the Massachusetts Institute of Technology. We are a student-run
                group dedicated to bringing a variety of dance styles to everyone in
                the MIT community, regardless of level. Every semester, we offer
                various dance workshops to our members and produce one full length
                show.
              </p>
          <div className="info-cards">
            <div className="card">
              <h3>Membership</h3>
              <p>
                Membership is open to everyone, regardless of experience level. We
                welcome undergraduate and graduate students, alumni, staff, and anyone
                else in the area interested in dance.
              </p>
            </div>

            <div className="card">
              <h3>Show</h3>
              <p>
                We produce one full-length{" "}
                <Link className="link-name" to="/shows">
                  show
                </Link>{" "}
                every semester, with four performances at the end of the semester. Dances are choreographed by students across
                styles such as hip-hop inspired, jazz, ballet, tap, modern, and
                more. All members who want to participate in the show must attend{" "}
                <Link className="link-name" to="/auditions">
                  auditions
                </Link>
                , which take place at the beginning of each semester.
              </p>
              <p>
                Members may join up to four dances, each with one hour of weekly
                rehearsal. Dancers must also attend
                First Showings and Second Showings (two full run-throughs of the show)
                and Production Week. Production Week occurs the week before the show
                performances and involves several dress rehearsals.
              </p>
            </div>

            <div className="card">
              <h3>Workshops</h3>
              <p>
                DanceTroupe offers workshops of different styles and levels to all of
                its members throughout the year. No audition or experience is required
                to attend! Check our{" "}
                <a
                  className="link-name"
                  href="https://www.facebook.com/mitdancetroupe/"
                  target="_blank"
                >
                  facebook page
                </a>{" "}
                for our workshop schedules!
              </p>
            </div>


            <div className="card">
              <h3>Officers</h3>
              <p>
                DanceTroupe is run entirely by a group of student officers, all of
                whom are elected by the members of DanceTroupe. Officer terms are one
                year (two semesters), and there are no term limits. To contact
                officers, email{" "}
                <b><a className="link-name" href="mailto:dt-officers@mit.edu">
                  dt-officers@mit.edu
                </a></b>
                . Current officers may be found on the{" "}
                <Link className="link-name" to="/officers">
                  officers page
                </Link>
                .
              </p>
            </div>

              <p>
                DanceTroupe abides by all MIT ASA policies. View our constitution{" "}
                <b><a
                  className="link-name"
                  href="http://web.mit.edu/dancetroupe/www/dt_constitution.pdf"
                  target="_blank"
                >
                  here.
                </a></b>
              </p>
          </div>
        </div>
      </div>

    );
  }
}

export default Home;
