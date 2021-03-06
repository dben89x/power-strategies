class PagesController < ApplicationController
  before_action :set_services, only: [:home, :about]

  def home
    @page_description = 'Power Strategies oversees the technology implementation process for a variety of technology systems, including casino management systems, financial systems, and human resources information systems.  We develop casino operations plans and logistics and support your organization during transition and growth.'
    @projects = Project.all
  end

  def about
    @page_title = 'Who We Are'
    @aboutText = {
      mission: {
        paragraphs: [
          "Specializing in technology systems for the casino gaming industry, Power Strategies provides technology implementation planning, product and process analyses, and training services.  We support casino management and regulatory agencies to allow them to focus on their daily tasks while we focus on technology implementation success.   We tailor our strategies to provide casino operators and gaming regulators the most efficient, accurate, and comprehensive technology installations, operational reviews, analysis, and recommendations.  In essence, we make the complex simple.",

          "Power Strategies is focused on the gaming and hospitality industries.  We provide advice, guidance, and operational expertise for casino operations, information technology systems, job skills and soft skills training, technology implementation and consulting services.  Power Strategies is a a certified woman owned  business enterprise in Maryland, Nevada, New York, and Pennsylvania."
        ]
      },
      featured: {
        paragraphs: [
          "The founder, CEO and President of Power Strategies.  With over 20 years experience in the gaming industry, and more than 50 major technology implementation projects during her career, Stephanie’s work has spanned the breadth of the gaming industry from casino operations to gaming device and systems design and development.  Throughout her career, Stephanie has delivered exceptional results while supporting organizational values of integrity, accountability, and collaboration.",

          "Stephanie is widely considered an expert on gaming system technologies.  In senior management positions at Casino Data Systems, Aristocrat Technologies, and Bally Technologies, she designed and implemented multiple casino player tracking and accounting technology systems.  Additionally, she has overseen the implementation of more than $500 million dollars in gaming and hospitality related technology systems.  She is also the founder of Fast Dash, a gaming technology software development company specializing in work flow efficiency solutions.",

          "Stephanie shares her knowledge through business engagements, seminars and presentations, gaming publications and social media.  She was honored as 2012 “Great Women of Gaming” Proven Leader by Casino Enterprise Management and is a member of the International Woman’s Forum.  She is a graduate of the University of California, Berkeley with a Bachelor of Arts degree in Economics."
        ]
      }
    }
    @team_members = TeamMember.all
  end

  def services
    @page_title = 'What We Do'
    @services = [{
        key: 1,
        title: "Casino Operations & Design",
        icon: "https://s3.amazonaws.com/power-strategies/icons/lucky-sevens.png",
        overview: "With over 50 combined years of gaming experience, Power Strategies is proud to offer gaming and operational performance tools to enhance current operations."
      }, {
        key: 2,
        title: "Project Planning & Impementation",
        icon: "https://s3.amazonaws.com/power-strategies/icons/planning.png",
        overview: "Power Strategies provides industry implemented comprehensive technology plans which guide your business from solution selection through post-implementation support.  We coordinate project plans and processes with your team members, vendors and service providers to ensure the highest level of satisfaction."
      }, {
        key: 3,
        title: "Results Oriented Analysis",
        icon: "https://s3.amazonaws.com/power-strategies/icons/analysis.png",
        overview: "Results oriented analysis examines gaming operations to review gaming device performance, progressive link review, and gaming database audit to assess current business models and recommend operational shifts to support changing business needs."
    }]
  end

  def projects
    @page_title = 'Projects & Partners'
    @projects = Project.all

  end

  def publications
    @page_title = 'Publications'
  end

  def contact

  end

  def set_services
    @services = [{
        key: 1,
        title: "Casino Operations & Design",
        icon: "https://s3.amazonaws.com/power-strategies/icons/lucky-sevens.png",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ullamcorper, dolor consequat hendrerit fringilla, orci massa pretium quam, in scelerisque mi elit nec massa."
      }, {
        key: 2,
        title: "Project Planning & Impement",
        icon: "https://s3.amazonaws.com/power-strategies/icons/planning.png",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ullamcorper, dolor consequat hendrerit fringilla, orci massa pretium quam, in scelerisque mi elit nec massa."
      }, {
        key: 3,
        title: "Results Oriented Analysis",
        icon: "https://s3.amazonaws.com/power-strategies/icons/analysis.png",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ullamcorper, dolor consequat hendrerit fringilla, orci massa pretium quam, in scelerisque mi elit nec massa."
    }]
  end


end
