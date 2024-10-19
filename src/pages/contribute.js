import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

// markup
const ContributePage = () => {
  return (
    <Layout pageTitle="Contribute">
      <br />
      <br />
      Training in software and computing are essential ingredients for the
      success of any HEP experiment. As most experiments have similar basic
      prerequisites (Unix shell, Python, C++, etc.) we have joined efforts and
      created this introductory software training curriculum that teaches HEP
      newcomers the software skills they need as they enter the field, and in
      parallel, instills best practices for writing software.
      <br />
      <br />
      The curriculum is composed of a set of <it>modules</it> (developed by HSF,
      Software Carpentries, and other organizations), so that learners/students
      can focus on what is most relevant to them.
      <br />
      <br />
      Contributions of any kind are very welcome! There are various ways you can
      get involved:
      <br />
      <br />
      <ul>
        <li>
          Join our <b>meetings</b> to give feedback and discuss with us (details
          at our{" "}
          <a
            href="https://hepsoftwarefoundation.org/activities/training.html"
            className="a-no-style"
          >
            main page
          </a>
          ).
        </li>
        <li>
          <b>Bugs reports or feature requests</b>: Directly open an issue on{" "}
          <a href="https://github.com/hsf-training" className="a-no-style">
            GitHub
          </a>{" "}
          or (even better) submit a pull request to fix things.
        </li>
        <li>
          Want to <b>contribute your own module</b>? We compiled a small list of
          recommendations{" "}
          <a
            href="https://hepsoftwarefoundation.org/training/module-guidelines.html"
            className="a-no-style"
          >
            here
          </a>
          . Of course we always encourage you to talk to us early for a better
          coordination. There is also more technical information for{" "}
          <a
            href="https://github.com/hsf-training/carpentry-cookiecutter"
            className="a-no-style"
          >
            creating a new module
          </a>
          .
        </li>
        <li>
          Want to <b>help out at a workshop?</b>{" "}
          <a
            href="https://hepsoftwarefoundation.org/training/educators.html"
            className="a-no-style"
          >
            More information on the different roles in our training events
          </a>
        </li>
        <li>
          Want to <b>organize your own workshop</b>?{" "}
          <a
            href="https://hepsoftwarefoundation.org/training/howto-event.html"
            className="a-no-style"
          >
            We got you covered
          </a>
        </li>
      </ul>
    </Layout>
  );
};

export const Head = () => <Seo title="Contribute" />;
export default ContributePage;
