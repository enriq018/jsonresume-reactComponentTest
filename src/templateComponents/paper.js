import React from 'react';

import t from './paper.css';

const Header = ({header}) => (
  <header>
    <div className="header-content">
      <div className="header-pic">
        <img src="https://img.huffingtonpost.com/asset/5dcc613f1f00009304dee539.jpeg?cache=QaTFuOj2IM&amp;ops=crop_834_777_4651_2994%2Cscalefit_720_noupscale" className="pic" />
      </div>
      <div className="header-text">
        <p>
          {header.name}
        </p>
        <p className="subtitle">{header.label}</p>
      </div>
    </div>
  </header>
);

const Contact = ({contact}) => (
  <section className="content">
    <div className="paper-row">
      <div className="content-cat">
        Contact
      </div>
      <div className="content-text">
        <ul>
          <li>Website</li>
          <li>{contact.website}</li>
        </ul>
        <ul>
          <li>Email</li>
          <li>{contact.email}</li>
        </ul>
        <ul>
          <li>Phone</li>
          <li>{contact.phone}</li>
        </ul>
      </div>
    </div>
  </section>
)

const Location = ({location}) => (
  <section className="content">
    <div className="paper-row">
      <div className="content-cat">
        Location
      </div>
      <div className="content-text">
        <ul>
          <li>Address</li>
          <li>{location.address}</li>
        </ul>
        <ul>
          <li>Postal Code & City</li>
          <li>{location.postalCode} {location.city}</li>
        </ul>
        <ul>
          <li>Region</li>
          <li>{location.region}</li>
        </ul>
      </div>
    </div>
  </section>
)

const WorkChild = ({work}) => (
  <section className="content work-content">
      <div className="paper-row">
        <div className="content-cat big-text">
        <p>{work.startDate} till {work.endDate}</p>
        </div>
        <div className="content-text work-listing education-listing">
          <p>
            <strong>{work.position} </strong>
            at <strong><a href="http://company.com">{work.company}:</a></strong>
          </p>
          <p>{work.summary}</p>
          {work.highlights.map((el, i) => <HighlightItem item={el}/>)}
        </div>
      </div>
    </section>
)

const HighlightItem = ({item}) => (
  <p className="highlight">{item}</p>

)

// MAP INSIDE COMP
const Work = ({work}) => {
  console.log("WORK:", work)
  const excludingFirstItem = [];
  for(let i = 1; i < work.length; i += 1) {
    excludingFirstItem.push(work[i]);
  }
  return (
    <React.Fragment>
    <section className="content">
      <div className="paper-row">
        <div className="content-cat big-text">
          Work  Experience
          <p>{work[0].startDate} till {work[0].endDate}</p>
        </div>
        <div className="content-text work-listing education-listing">
          <p >
            <strong>{work[0].position} </strong>
            at <strong><a href="http://company.com">{work[0].company}:</a></strong>
          </p>
          <p>{work[0].summary}</p>
          {work[0].highlights.map((el, i) => <HighlightItem item={el}/>)}
        </div>
      </div>
    </section>
    {work.length > 1 && excludingFirstItem.map((el, i) => <WorkChild work={el}/>)}
  </React.Fragment>
  )
}

const Organization = () => (
  <section className="content">
    <div className="paper-row">
      <div className="content-cat big-text">
        Organization
        <p>2012-01-01 till 2013-01-01</p>
      </div>
      <div className="content-text work-listing">
        <p>
          Description...
        </p>
        <p className="highlight">Awarded &#x27;Volunteer of the Month</p>
        <p className="highlight">Awarded &#x27;Volunteer of the Month2</p>
      </div>
    </div>
  </section>
)

const Education = () => (
  <React.Fragment>
    <section className="content">
        <div className="paper-row">
          <div className="content-cat big-text">
            Education
            <p>2011-01-01 till 2013-01-01</p>
          </div>
          <div className="content-text work-listing education-listing">
            <p className="heading" >University</p>
            <p className="highlight">
              Bachelor:
              <i>Software Development (4.0)</i>
            </p>
          </div>
        </div>
      </section>
      <section className="content education-content">
        <div className="paper-row">
          <div className="content-cat big-text">
            <p>2011-01-01 till 2013-01-01</p>
          </div>
          <div className="content-text work-listing education-listing">
            <p className="heading">University2</p>
            <p className="highlight">
              Bachelor:
              <i>Software Development2 (4.0)</i>
            </p>
          </div>
        </div>
      </section>
  </React.Fragment>
)

const Skills = () => (
  <section className="content">
    <div className="paper-row">
      <div className="content-cat">
        Skills
      </div>
      <div className="content-text skills-listing">
        <p>
          <span className="name">
            <strong>
            Web Development
            </strong>
          </span>
          <span>(Master):</span>
          HTML, CSS, Javascript
        </p>
      </div>
    </div>
  </section>
)

const Lang = () => (
  <section className="content">
    <div className="paper-row">
      <div className="content-cat">
        Languages
      </div>
      <div className="content-text">
        <ul>
          <li>English</li>
          <li>Native speaker</li>
        </ul>
      </div>
    </div>
  </section>
)

const Profiles = () => (
  <section className="content profiles">
    <div className="paper-row">
      <div className="content-cat">
        Profiles
      </div>
      <div className="content-text profiles-listing">
        <ul>
          <li>
            <a href="http://twitter.com/john" target="_blank">
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
)

const Interests = () => (
  <section className="content">
    <div className="paper-row">
      <div className="content-cat">
        Interests
      </div>
      <div className="content-text skills-listing">
        <p>
          <span className="name">
            <strong>
            Wildlife:
            </strong>
          </span>
          Ferrets, Unicorns, test
        </p>
      </div>
    </div>
  </section>
)
const TemplatePaper = ({data}) => (
  <div className="resume-wrapper">
  <article className="paper">
    <Header header={data.basics}/>
    <div class="content-wrapper">
      <Contact contact={data.basics}/>
      <Location location={data.basics.location}/>
      <Work work={data.work}/>
      <Organization data={data}/>
      <Education data={data}/>
      <Skills data={data}/>
      <Lang data={data}/>
      <Profiles data={data}/>
      <Interests data={data}/>
    </div>
  </article>
</div>
)

export default TemplatePaper;