<template>
    <div class="backgroundcolor" style="size: 90%;">
      <div class="row page q-pa-xl  q-ma-xl">
        <div class="col-3 ">
          <img
            data-aos="fade-in"
            data-aos-duration="3000"
            src="/Peesopic.jpg"
            alt="Logo"
            class="imagebackground"
          />
          <img />
        </div>
        <div class="col-5 ">
          <div>
            <div>
              <p
                data-aos="fade-right"
                data-aos-duration="1500"
                style="font-size: 15px; color: #48b544"
              >
                We can make it <span><b>HAPPEN</b></span>
              </p>
            </div>
            <h3 data-aos="fade-up" data-aos-duration="1500" class="CPEESO">
              <span style="">CPEESO</span> <br />
            </h3>
            <h4 data-aos="fade-up" data-aos-duration="1500" class="tagumcity">
              TAGUM CITY
            </h4>
            <div class="row CPEECO_CONTENT">
              <div class="col-11 col-xl-8 col-lg-11 col-md-9 col-sm-10">
                <p
                  data-aos="fade-left"
                  data-aos-duration="1500"
                  style="justify-content: space-around"
                  class="publicEducation"
                >
                  Public Education and Employment Services Office (P.E.E.S.O.)
                  is a government agency tasked in providing education and
                  employment services under the Department of Labor and
                  Employment (DOLE).
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-4 col-md-4">
          <div class="display_Content">
            <div>
              <h4 style="margin-top: 30px">
                <span class="displayNumber"
                  >{{ displayNumber_TotalJobs }}+</span
                >
              </h4>
              <h4 class="captionTotalOverAll">Over All Job Postings</h4>
            </div>

            <div>
              <h4 class="displayNumber_Margin_OverlAllVacancies">
                <span class="displayNumber"
                  >{{ displayNumber_Vacancies }}+</span
                >
              </h4>
              <p class="captionTotalOverAll">Over All Vacancies</p>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script scoped>
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  data() {
    return {
      displayNumber_TotalJobs: 0,
      displayNumber_Vacancies: 0,
    };
  },
};
</script>
<style scoped>
.backgroundcolor {
  background-color: rgba(252, 250, 250, 0.943);
}
.page {
  align-items: center;
  margin-top: 20px;
}
.imagebackground {
  height: 300px;
  border-radius: 12px;
}
.CPEESO {
  margin-top: 15px;
  font-weight: bold;
  color: #3fb03f;
}
.CPEECO_CONTENT {
  margin-top: 40px;
}
.tagumcity {
  margin-top: -50px;
  color: #48b544;
  font-size: 18px;
  margin-left: 10px;
}
.displayNumber {
  font-weight: 500;
}
.captionTotalOverAll {
  font-size: 20px;
  margin-top: -48px;
  font-family: sans-serif;
}
.displayNumber_Margin_OverlAllVacancies {
  margin-top: 90px;
}

@media only screen and (max-width: 1048px) {
  .page {
    margin-right: auto;
    margin-left: 120px;

    margin-top: 20px;
    background-color: rgba(252, 250, 250, 0.943);
  }
}

@media only screen and (max-width: 968px) {
  .page {
    margin-right: auto;
    margin-left: 30px;

    margin-top: 20px;
    background-color: rgba(252, 250, 250, 0.943);
  }
}

@media only screen and (max-width: 878px) {
  .page {
    margin-right: -70px;
    margin-left: 10px;
    margin-top: 20px;
    background-color: rgba(252, 250, 250, 0.943);
  }
}

@media only screen and (max-width: 375px) {
  .page {
    margin-right: -800px;
    margin-left: 200px;

    margin-top: 20px;
    background-color: rgba(252, 250, 250, 0.943);
  }
}
</style>
