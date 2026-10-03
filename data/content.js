/* ============================================================
   NỘI DUNG PORTFOLIO — sửa file này để đổi nội dung website.
   Mỗi đoạn chữ có 2 bản: vi (tiếng Việt) và en (English).
   Lưu file rồi tải lại trang (F5) là thấy thay đổi.
   Lưu ý: dữ liệu CV, liên hệ, lời giới thiệu hiện là DỮ LIỆU GIẢ LẬP.
   ============================================================ */
window.PORTFOLIO = {
  meta: {
    title: { vi: "Nguyễn Minh Anh — Digital Transformation & Operations Manager", en: "Nguyễn Minh Anh — Digital Transformation & Operations Manager" },
    description: {
      vi: "Portfolio của Nguyễn Minh Anh: hơn 9 năm cải tiến quy trình, chuyển đổi số và vận hành. Dự án, kết quả và cách làm việc.",
      en: "Portfolio of Nguyễn Minh Anh: 9+ years in process improvement, digital transformation and operations. Projects, results and way of working."
    },
    demoNote: { vi: "Hồ sơ cá nhân · Dữ liệu giả lập phục vụ mục đích trình bày", en: "Personal profile · Simulated data for demonstration purposes" }
  },

  profile: {
    name: "Nguyễn Minh Anh",
    role: { vi: "Digital Transformation & Operations Manager", en: "Digital Transformation & Operations Manager" },
    location: { vi: "TP. Hồ Chí Minh, Việt Nam", en: "Ho Chi Minh City, Vietnam" },
    tagline: {
      vi: "Biến vấn đề vận hành phức tạp thành quy trình rõ ràng và công cụ mà người dùng thật sự sử dụng.",
      en: "Turning complex operational problems into clear processes and tools that people actually use."
    },
    photo: "assets/images/avatar.jpg",
    photoAlt: { vi: "Chân dung Nguyễn Minh Anh", en: "Portrait of Nguyễn Minh Anh" },
    summary: {
      vi: "Quản lý Digital Transformation & Operations với hơn 9 năm kinh nghiệm cải tiến quy trình, triển khai các sáng kiến chuyển đổi số và quản lý các dự án liên phòng ban. Đóng vai trò kết nối giữa nhu cầu kinh doanh và giải pháp công nghệ: xác định vấn đề vận hành, đơn giản hóa quy trình, dùng dữ liệu hỗ trợ ra quyết định và triển khai công cụ giúp đội ngũ làm việc hiệu quả hơn.",
      en: "Digital Transformation & Operations Manager with 9+ years of experience in process improvement, digital transformation initiatives and cross-functional project management. A bridge between business needs and technology solutions: identifying operational problems, simplifying processes, using data to support decisions and rolling out tools that help teams work better."
    },
    approach: {
      vi: "Khi bắt đầu một dự án, tôi không bắt đầu bằng công nghệ. Tôi bắt đầu bằng việc quan sát cách mọi người đang làm việc, xác định vấn đề thật sự nằm ở đâu, sau đó mới xem công nghệ có thể giúp giải quyết như thế nào. Tôi chia vấn đề phức tạp thành những bước nhỏ và rõ ràng, và đặc biệt quan tâm đến trải nghiệm của người dùng nội bộ.",
      en: "I don't start a project with technology. I start by observing how people work, finding where the real problem is, and only then asking how technology can help. I break complex problems into small, clear steps, and I care deeply about the internal user's experience."
    },
    outside: {
      vi: "Ngoài công việc: đọc sách business & technology, thử công cụ productivity mới, tham gia workshop về innovation, hiking, chụp ảnh và khám phá quán cà phê mới vào cuối tuần.",
      en: "Outside work: reading about business & technology, trying new productivity tools, innovation workshops, hiking, photography and discovering new cafés on weekends."
    },
    interests: ["Digital Transformation", "Future of Work", "Generative AI", "Process Improvement", "Business Operations", "Data Visualization", "Productivity", "Change Management"]
  },

  // Chỉ số hiển thị ở Hero (value = số, suffix = hậu tố, prefix = tiền tố)
  heroStats: [
    { value: 9, suffix: "+", label: { vi: "năm Operations & Digital Transformation", en: "years in Operations & Digital Transformation" } },
    { value: 15, suffix: "+", label: { vi: "dự án cải tiến & chuyển đổi số", en: "improvement & transformation projects" } },
    { value: 20, suffix: "+", label: { vi: "quy trình vận hành được chuẩn hóa", en: "operating processes standardized" } },
    { value: 85, suffix: "%", label: { vi: "adoption sau 2 tháng triển khai", en: "adoption after 2 months" } }
  ],

  principles: [
    {
      title: "Simplify before digitize",
      text: {
        vi: "Không nên số hóa một quy trình phức tạp mà chưa xem có thể đơn giản hóa nó trước hay không.",
        en: "Don't digitize a complex process before checking whether it can be simplified first."
      }
    },
    {
      title: "Data should support decisions",
      text: {
        vi: "Dashboard không nên chỉ có nhiều biểu đồ. Người sử dụng phải hiểu họ cần làm gì khi nhìn thấy dữ liệu.",
        en: "A dashboard shouldn't just be full of charts. Users must know what to do when they see the data."
      }
    },
    {
      title: "Adoption is part of the project",
      text: {
        vi: "Dự án không kết thúc khi go-live. Người dùng thực sự sử dụng được công cụ mới là một phần của kết quả.",
        en: "A project doesn't end at go-live. People actually using the new tool is part of the result."
      }
    }
  ],

  // Kết quả nổi bật (lưới số liệu)
  highlights: [
    { big: "3 → 1,5", unit: { vi: "ngày", en: "days" }, text: { vi: "Thời gian xử lý yêu cầu mua hàng trung bình", en: "Average purchase request processing time" }, project: "purchase-request" },
    { big: "~12", unit: { vi: "giờ/tuần", en: "hrs/week" }, text: { vi: "Giảm thời gian tổng hợp báo cáo thủ công nhờ Dashboard Operations", en: "Manual reporting time saved by the Operations Dashboard" }, project: "ops-dashboard" },
    { big: "180+", unit: { vi: "người dùng", en: "users" }, text: { vi: "Sử dụng hệ thống request nội bộ, đạt ~85% adoption sau 2 tháng", en: "Using the internal request system, ~85% adoption after 2 months" }, project: "purchase-request" },
    { big: "150+", unit: { vi: "request/tháng", en: "requests/month" }, text: { vi: "Được quản lý trên Digital Purchase Workflow", en: "Managed on the Digital Purchase Workflow" }, project: "purchase-request" },
    { big: "20+", unit: { vi: "SOP", en: "SOPs" }, text: { vi: "Quy trình vận hành được chuẩn hóa giữa các cửa hàng", en: "Operating processes standardized across stores" }, project: "sop" },
    { big: "12", unit: { vi: "use case AI", en: "AI use cases" }, text: { vi: "Phù hợp để triển khai rộng, từ pilot 25 người thuộc 5 phòng ban", en: "Identified for wider rollout from a 25-person, 5-department pilot" }, project: "ai-pilot" }
  ],

  projects: [
    {
      id: "purchase-request",
      title: "Digital Purchase Request Workflow",
      period: "03/2024 – 07/2024",
      role: "Project Lead",
      company: "NovaRetail Group",
      image: "assets/images/project-purchase-request.jpg",
      imageAlt: { vi: "Minh họa dự án Digital Purchase Request Workflow", en: "Illustration of the Digital Purchase Request Workflow project" },
      headline: { vi: "Giảm thời gian xử lý yêu cầu mua hàng từ ~3 ngày xuống 1,5 ngày", en: "Cut purchase request time from ~3 days to 1.5 days" },
      context: {
        vi: "Quy trình yêu cầu mua hàng nội bộ trước đây dùng email, file Excel và nhiều bước xác nhận thủ công. Nhân viên gửi yêu cầu qua email, quản lý xác nhận, Finance kiểm tra ngân sách và Procurement tiếp tục xử lý. Vì thông tin nằm ở nhiều nơi nên người gửi khó biết yêu cầu đang ở bước nào.",
        en: "The internal purchase request process used email, Excel files and many manual approvals. Staff emailed requests, managers approved, Finance checked budgets and Procurement processed. With information scattered, requesters couldn't tell which step their request was at."
      },
      problems: {
        vi: ["Thông tin yêu cầu không thống nhất", "Thiếu dữ liệu khi gửi request", "Nhiều email trao đổi qua lại", "Khó kiểm tra trạng thái request", "Không có dashboard tổng hợp", "Báo cáo phải làm thủ công"],
        en: ["Inconsistent request information", "Missing data when submitting requests", "Many back-and-forth emails", "Hard to check request status", "No consolidated dashboard", "Manual reporting"]
      },
      myRole: {
        vi: ["Phỏng vấn người dùng từ Operations, Finance và Procurement", "Mapping toàn bộ quy trình hiện tại và xác định các điểm nghẽn", "Thiết kế workflow mới và xây dựng requirement cho hệ thống", "Làm việc với vendor triển khai, điều phối UAT", "Xây dựng tài liệu hướng dẫn", "Theo dõi adoption sau launch"],
        en: ["Interviewed users from Operations, Finance and Procurement", "Mapped the current process and identified bottlenecks", "Designed the new workflow and wrote system requirements", "Worked with the implementation vendor and coordinated UAT", "Produced user guides", "Tracked adoption after launch"]
      },
      solution: {
        vi: "Một workflow tập trung: nhân viên tạo request → Manager phê duyệt → Finance kiểm tra ngân sách → Procurement xử lý → người gửi theo dõi trạng thái trên dashboard.",
        en: "A single workflow: employee creates a request → Manager approves → Finance checks budget → Procurement processes → requester tracks status on a dashboard."
      },
      steps: {
        vi: ["Tạo request", "Manager duyệt", "Finance kiểm tra ngân sách", "Procurement xử lý", "Theo dõi trạng thái"],
        en: ["Create request", "Manager approval", "Finance budget check", "Procurement", "Track status"]
      },
      results: {
        vi: ["Giảm thời gian xử lý trung bình từ khoảng 3 ngày xuống 1,5 ngày", "Giảm khoảng 40% email trao đổi liên quan đến việc kiểm tra trạng thái", "Hơn 150 request/tháng được quản lý trên hệ thống", "Người quản lý có dashboard theo dõi request đang chờ duyệt", "Finance xuất báo cáo theo phòng ban và loại chi phí"],
        en: ["Average processing time cut from ~3 days to 1.5 days", "~40% fewer status-check emails", "150+ requests per month managed in the system", "Managers get a dashboard of requests awaiting approval", "Finance can export reports by department and cost type"]
      },
      skills: ["Process Mapping", "Requirement Gathering", "Stakeholder Management", "Project Management", "Workflow Design", "Change Management"]
    },
    {
      id: "ops-dashboard",
      title: "Operations Performance Dashboard",
      period: "08/2023 – 12/2023",
      role: "Project Manager & Dashboard Designer",
      company: "NovaRetail Group",
      image: "assets/images/project-dashboard.jpg",
      imageAlt: { vi: "Minh họa dự án Operations Performance Dashboard", en: "Illustration of the Operations Performance Dashboard project" },
      headline: { vi: "Một dashboard chung thay cho hàng chục file báo cáo — tiết kiệm ~12 giờ mỗi tuần", en: "One shared dashboard replacing dozens of reports — ~12 hours saved every week" },
      context: {
        vi: "Ban quản lý nhận báo cáo từ hơn 40 cửa hàng dưới nhiều file khác nhau. Team Operations mất nhiều thời gian tổng hợp trước cuộc họp tuần.",
        en: "Management received reports from 40+ stores in many different files. The Operations team spent a lot of time compiling them before the weekly meeting."
      },
      problems: {
        vi: ["Dữ liệu phân tán", "Format của các cửa hàng không thống nhất", "Khó so sánh hiệu quả giữa các cửa hàng", "Quản lý nhận thông tin chậm", "Nhiều thời gian tạo báo cáo hơn là phân tích"],
        en: ["Scattered data", "Inconsistent store formats", "Hard to compare store performance", "Slow information for managers", "More time spent building reports than analysing"]
      },
      myRole: {
        vi: ["Làm việc với Store Operations để thống nhất KPI", "Chuẩn hóa cấu trúc dữ liệu đầu vào", "Thiết kế wireframe và làm prototype dashboard", "Thu thập feedback từ người dùng và điều chỉnh", "Viết hướng dẫn sử dụng và training cho đội quản lý"],
        en: ["Aligned KPIs with Store Operations", "Standardized the input data structure", "Designed wireframes and a dashboard prototype", "Gathered user feedback and iterated", "Wrote the user guide and trained the management team"]
      },
      solution: {
        vi: "Dashboard gồm: doanh thu, số giao dịch, giá trị giao dịch trung bình, chi phí vận hành, tỷ lệ thiếu hàng, phản hồi khách hàng, hiệu quả theo cửa hàng và xu hướng theo tuần/tháng. Công cụ: Google Sheets, Looker Studio, Excel.",
        en: "The dashboard covers revenue, transactions, average transaction value, operating cost, stock-out rate, customer feedback, store-level performance and weekly/monthly trends. Tools: Google Sheets, Looker Studio, Excel."
      },
      results: {
        vi: ["Giảm khoảng 12 giờ làm báo cáo thủ công mỗi tuần", "Giảm số lượng file báo cáo riêng cần theo dõi", "Ban quản lý phát hiện cửa hàng bất thường nhanh hơn", "Trở thành tài liệu chính trong cuộc họp Operations hàng tuần"],
        en: ["~12 hours of manual reporting saved every week", "Fewer separate report files to track", "Management spots unusual stores faster", "Became the main document in the weekly Operations meeting"]
      },
      skills: ["Dashboard Design", "Data Visualization", "KPI Design", "Google Sheets", "Looker Studio", "Excel", "Training"]
    },
    {
      id: "sop",
      title: "Store Operations SOP Standardization",
      period: "02/2023 – 06/2023",
      role: "Process Improvement Lead",
      company: "NovaRetail Group",
      image: "assets/images/project-sop.jpg",
      imageAlt: { vi: "Minh họa dự án chuẩn hóa SOP vận hành cửa hàng", en: "Illustration of the Store Operations SOP Standardization project" },
      headline: { vi: "Chuẩn hóa hơn 20 SOP và tạo thư viện quy trình chung cho toàn hệ thống", en: "Standardized 20+ SOPs into one shared process library" },
      context: {
        vi: "Các cửa hàng thực hiện một số quy trình theo những cách khác nhau dù thuộc cùng một hệ thống.",
        en: "Stores performed some processes differently even though they belonged to the same network."
      },
      problems: {
        vi: ["Hơn 20 quy trình: mở/đóng cửa hàng, kiểm kê, nhận hàng, báo cáo sự cố, bàn giao ca, báo cáo doanh số hằng ngày, xử lý khiếu nại khách hàng…", "Cách xử lý khác nhau giữa các cửa hàng"],
        en: ["20+ processes: opening/closing, inventory checks, receiving, incident reporting, shift handover, daily sales reporting, customer complaints…", "Handling varied between stores"]
      },
      myRole: {
        vi: ["Quan sát hoạt động tại cửa hàng, phỏng vấn Store Manager", "Mapping quy trình hiện tại", "Xác định các bước trùng hoặc không cần thiết", "Thiết kế quy trình chuẩn", "Pilot tại 5 cửa hàng, thu thập feedback, điều chỉnh rồi rollout toàn hệ thống"],
        en: ["Observed store operations and interviewed Store Managers", "Mapped current processes", "Identified duplicate or unnecessary steps", "Designed the standard process", "Piloted in 5 stores, gathered feedback, adjusted, then rolled out network-wide"]
      },
      solution: {
        vi: "Quy trình chuẩn được đơn giản hóa trước khi chuẩn hóa, kèm checklist ngắn gọn để nhân viên dùng ngay trong ca làm việc.",
        en: "Processes were simplified before being standardized, with short checklists staff can use during their shift."
      },
      results: {
        vi: ["Chuẩn hóa hơn 20 SOP", "Giảm sự khác biệt trong cách xử lý giữa các cửa hàng", "Tạo thư viện SOP tập trung", "Checklist đơn giản dùng trong ca làm việc", "Store Manager có nguồn tài liệu chung để đào tạo nhân viên mới"],
        en: ["20+ SOPs standardized", "Less variation in handling across stores", "A centralized SOP library", "Simple in-shift checklists", "Store Managers have one shared source for training new staff"]
      },
      skills: ["SOP Development", "Process Improvement", "Process Mapping", "Pilot & Rollout", "Stakeholder Management"]
    },
    {
      id: "ai-pilot",
      title: "Internal AI Productivity Pilot",
      period: "01/2025 – 04/2025",
      role: "Project Lead",
      company: "NovaRetail Group",
      image: "assets/images/project-ai-pilot.jpg",
      imageAlt: { vi: "Minh họa dự án Internal AI Productivity Pilot", en: "Illustration of the Internal AI Productivity Pilot project" },
      headline: { vi: "Pilot Generative AI cho 25 người, xác định 12 use case để triển khai rộng", en: "Generative AI pilot with 25 people, 12 use cases identified for wider rollout" },
      context: {
        vi: "Thử nghiệm Generative AI để giảm thời gian xử lý các công việc lặp lại của nhân viên văn phòng. 25 nhân viên từ Marketing, HR, Operations, Finance và Business Development tham gia.",
        en: "A trial of Generative AI to reduce time spent on repetitive office tasks. 25 employees from Marketing, HR, Operations, Finance and Business Development took part."
      },
      problems: {
        vi: ["Tóm tắt báo cáo, viết email, chuẩn bị meeting notes", "Phân tích phản hồi khách hàng, chuẩn hóa nội dung báo cáo", "Research ban đầu, tạo draft SOP, xử lý dữ liệu đơn giản"],
        en: ["Report summaries, emails, meeting notes", "Customer feedback analysis, report standardization", "Initial research, SOP drafts, simple data handling"]
      },
      myRole: {
        vi: ["Thu thập use case, phân loại nhiệm vụ phù hợp và không phù hợp với AI", "Thiết kế hướng dẫn sử dụng, tổ chức workshop", "Theo dõi thử nghiệm và thu thập feedback", "Xây dựng bộ guideline sử dụng AI có trách nhiệm"],
        en: ["Collected use cases and sorted tasks suited / unsuited to AI", "Designed usage guides and ran workshops", "Monitored the trial and gathered feedback", "Built responsible-AI usage guidelines"]
      },
      solution: {
        vi: "Pilot có cấu trúc: use case rõ ràng, hướng dẫn thực hành, workshop và theo dõi mức sử dụng; kèm quy định các loại dữ liệu không nên đưa vào công cụ AI công cộng.",
        en: "A structured pilot: clear use cases, practical guides, workshops and usage tracking, plus rules on which data must not go into public AI tools."
      },
      results: {
        vi: ["18/25 người tham gia tiếp tục dùng AI ít nhất vài lần mỗi tuần", "Một số tác vụ soạn thảo, tổng hợp thông tin giảm đáng kể thời gian", "Danh sách 12 use case phù hợp để triển khai rộng hơn", "Bộ AI Usage Guidelines cho nhân viên", "Xác định các loại dữ liệu không nên đưa vào công cụ AI công cộng"],
        en: ["18 of 25 participants kept using AI at least a few times a week", "Noticeably less time on some drafting and summarizing tasks", "12 use cases identified for wider rollout", "AI Usage Guidelines for employees", "Defined the data types that must not go into public AI tools"]
      },
      skills: ["AI Adoption", "Change Management", "Workshop Facilitation", "Process Design", "Responsible AI"]
    }
  ],

  experience: [
    {
      role: "Digital Transformation & Operations Manager",
      company: { vi: "NovaRetail Group — chuỗi bán lẻ hơn 40 cửa hàng", en: "NovaRetail Group — retail chain, 40+ stores" },
      period: { vi: "01/2022 – Hiện tại", en: "01/2022 – Present" },
      points: {
        vi: ["Dẫn dắt dự án số hóa quy trình yêu cầu mua hàng nội bộ, giảm thời gian xử lý trung bình từ ~3 ngày xuống 1,5 ngày", "Xây dựng hệ thống dashboard quản trị vận hành, giảm ~12 giờ tổng hợp báo cáo thủ công mỗi tuần", "Chuẩn hóa hơn 20 quy trình vận hành giữa các cửa hàng", "Triển khai hệ thống quản lý task & request nội bộ cho hơn 180 người dùng, đạt ~85% adoption sau 2 tháng", "Phối hợp Finance & Operations tự động hóa một phần báo cáo chi phí hằng tháng"],
        en: ["Led digitization of the internal purchase request process, cutting average processing time from ~3 days to 1.5 days", "Built an operations management dashboard system, saving ~12 hours of manual reporting weekly", "Standardized 20+ operating processes across stores", "Rolled out an internal task & request system to 180+ users, reaching ~85% adoption in 2 months", "Worked with Finance & Operations to partly automate monthly cost reporting"]
      }
    },
    {
      role: "Senior Business Operations Specialist",
      company: { vi: "BrightBite Foods — chuỗi F&B", en: "BrightBite Foods — F&B chain" },
      period: { vi: "06/2018 – 12/2021", en: "06/2018 – 12/2021" },
      points: {
        vi: ["Xây dựng dashboard tổng hợp dữ liệu từ 25 cửa hàng, giảm ~60% thời gian tạo báo cáo tháng", "Chuẩn hóa hệ thống báo cáo vận hành từ hơn 10 file riêng lẻ thành một bộ báo cáo thống nhất", "Phân tích dữ liệu bán hàng, đề xuất điều chỉnh lịch nhân sự cho nhóm cửa hàng có lưu lượng khách không ổn định", "Thiết kế bộ KPI dashboard cho đội Store Operations"],
        en: ["Built a dashboard consolidating data from 25 stores, cutting monthly report time by ~60%", "Unified operations reporting from 10+ separate files into one report set", "Analysed sales data and proposed staffing-schedule changes for stores with unstable footfall", "Designed the KPI dashboard set for the Store Operations team"]
      }
    },
    {
      role: "Operations Executive",
      company: { vi: "UrbanLink Services — công ty dịch vụ", en: "UrbanLink Services — services company" },
      period: { vi: "07/2015 – 05/2018", en: "07/2015 – 05/2018" },
      points: {
        vi: ["Thiết kế tracker theo dõi yêu cầu khách hàng, kiểm soát tốt hơn các yêu cầu quá hạn", "Chuẩn hóa template báo cáo tuần và checklist bàn giao giữa Sales và Operations", "Tham gia dự án chuyển biểu mẫu giấy sang biểu mẫu điện tử"],
        en: ["Designed a customer-request tracker for better control of overdue requests", "Standardized weekly report templates and the Sales–Operations handover checklist", "Took part in moving paper forms to electronic forms"]
      }
    }
  ],

  skills: [
    { group: { vi: "Digital Transformation", en: "Digital Transformation" }, items: ["Process Digitalization", "Digital Transformation Roadmap", "Workflow Design", "Technology Adoption", "Change Management"] },
    { group: { vi: "Operations", en: "Operations" }, items: ["Process Improvement", "SOP Development", "Operations Management", "Root Cause Analysis", "Continuous Improvement"] },
    { group: { vi: "Project Management", en: "Project Management" }, items: ["Project Planning", "Stakeholder Management", "Requirement Gathering", "Risk Management", "Vendor Coordination"] },
    { group: { vi: "Data & Reporting", en: "Data & Reporting" }, items: ["Excel", "Google Sheets", "Power BI", "Looker Studio", "Dashboard Design", "Data Visualization", "Management Reporting"] },
    { group: { vi: "Automation & AI", en: "Automation & AI" }, items: ["Workflow Automation", "Generative AI", "Claude", "ChatGPT", "Gemini", "No-code / Low-code tools", "Process Automation"] },
    { group: { vi: "Collaboration", en: "Collaboration" }, items: ["Cross-functional Collaboration", "Workshop Facilitation", "Stakeholder Communication", "Training & User Adoption", "Executive Presentation"] }
  ],

  education: {
    degree: "Bachelor of Business Administration",
    school: "University of Economics Ho Chi Minh City",
    period: "2011 – 2015",
    note: {
      vi: "Chuyên ngành Business Administration; quan tâm: Operations Management, Business Analytics, Project Management, Management Information Systems.",
      en: "Major in Business Administration; interests: Operations Management, Business Analytics, Project Management, Management Information Systems."
    }
  },

  certificates: [
    { name: "Google Data Analytics Certificate", year: "2023" },
    { name: "Project Management Foundations", year: "2022" },
    { name: "Lean Six Sigma Yellow Belt", year: "2021" },
    { name: "Microsoft Power BI Data Analyst Fundamentals", year: "2020" }
  ],

  testimonials: [
    {
      quote: {
        vi: "Minh Anh có khả năng rất tốt trong việc biến một vấn đề vận hành phức tạp thành một quy trình rõ ràng mà cả business và IT đều có thể hiểu. Trong các dự án cùng làm, Minh Anh luôn giữ được sự cân bằng giữa yêu cầu của người dùng và tính khả thi khi triển khai.",
        en: "Minh Anh is excellent at turning a complex operational problem into a clear process that both business and IT can understand. In our joint projects, Minh Anh always balanced user requirements with delivery feasibility."
      },
      name: "Trần Hoàng Nam", title: "Head of Operations", company: "NovaRetail Group"
    },
    {
      quote: {
        vi: "Điểm mạnh nhất của Minh Anh không chỉ nằm ở việc triển khai công cụ mới mà ở việc giúp người dùng hiểu tại sao họ cần thay đổi cách làm việc. Điều này giúp các dự án có tỷ lệ adoption tốt hơn.",
        en: "Minh Anh's greatest strength isn't just rolling out new tools, but helping users understand why they need to change how they work. That leads to better adoption rates."
      },
      name: "Phạm Thu Hà", title: "HR & Transformation Director", company: "NovaRetail Group"
    },
    {
      quote: {
        vi: "Minh Anh rất mạnh ở việc tổ chức thông tin và chuyển dữ liệu thành những dashboard mà quản lý thực sự sử dụng để ra quyết định.",
        en: "Minh Anh is very strong at organising information and turning data into dashboards that managers actually use to make decisions."
      },
      name: "Nguyễn Thanh Long", title: "Former Operations Director", company: "BrightBite Foods"
    }
  ],

  opportunities: {
    intro: {
      vi: "Tôi sẵn sàng trao đổi về các dự án hoặc cơ hội hợp tác liên quan đến chuyển đổi số, tối ưu vận hành và ứng dụng AI trong công việc.",
      en: "I'm open to conversations about projects and collaborations in digital transformation, operations optimization and applying AI at work."
    },
    list: ["Digital Transformation", "Business Operations", "Transformation Project Management", "Process Improvement", "AI Adoption", "Internal Productivity Tools"]
  },

  contact: {
    email: "minhanh.demo@example.com",
    linkedin: "https://linkedin.com/in/minhanh-demo",
    linkedinLabel: "linkedin.com/in/minhanh-demo",
    cv: "assets/CV_Nguyen_Minh_Anh.pdf",
    // URL Google Apps Script (Web app) nhận tin nhắn từ form vào Google Sheet. Để trống "" để chỉ dùng email.
    sheetUrl: "https://script.google.com/macros/s/AKfycby3WIrvhxYsv-WmHIEHoxcTMhbdzSJ0dgmKF8oXuJs9HY-Id8n9SiY2Jf8vxv0m79AIvg/exec"
  },

  // Chuỗi giao diện (nhãn, nút…)
  ui: {
    nav: {
      about: { vi: "Giới thiệu", en: "About" },
      results: { vi: "Kết quả", en: "Results" },
      projects: { vi: "Dự án", en: "Projects" },
      experience: { vi: "Kinh nghiệm", en: "Experience" },
      skills: { vi: "Kỹ năng", en: "Skills" },
      testimonials: { vi: "Đánh giá", en: "Testimonials" },
      contact: { vi: "Liên hệ", en: "Contact" }
    },
    heroCtaProjects: { vi: "Xem dự án", en: "View projects" },
    heroCtaContact: { vi: "Liên hệ", en: "Get in touch" },
    heroCtaCv: { vi: "Tải CV", en: "Download CV" },
    openToWork: { vi: "Sẵn sàng trao đổi cơ hội mới", en: "Open to new opportunities" },
    aboutTitle: { vi: "Giới thiệu", en: "About me" },
    aboutKicker: { vi: "Cách tôi làm việc", en: "How I work" },
    principlesTitle: { vi: "3 nguyên tắc làm việc", en: "3 working principles" },
    interestsTitle: { vi: "Chủ đề quan tâm", en: "Topics I care about" },
    resultsTitle: { vi: "Kết quả nổi bật", en: "Selected results" },
    resultsSub: { vi: "Những con số từ các dự án đã triển khai. Bấm vào thẻ để xem dự án liên quan.", en: "Numbers from delivered projects. Click a card to see the related project." },
    projectsTitle: { vi: "Dự án tiêu biểu", en: "Featured projects" },
    projectsSub: { vi: "Mỗi dự án đi từ vấn đề thực tế đến kết quả đo được.", en: "Each project goes from a real problem to a measured result." },
    viewDetails: { vi: "Xem chi tiết", en: "View details" },
    close: { vi: "Đóng", en: "Close" },
    prev: { vi: "Dự án trước", en: "Previous project" },
    next: { vi: "Dự án sau", en: "Next project" },
    roleLabel: { vi: "Vai trò", en: "Role" },
    periodLabel: { vi: "Thời gian", en: "Period" },
    companyLabel: { vi: "Công ty", en: "Company" },
    secContext: { vi: "Bối cảnh", en: "Context" },
    secProblem: { vi: "Vấn đề", en: "Problem" },
    secRole: { vi: "Vai trò của Minh Anh", en: "My role" },
    secSolution: { vi: "Giải pháp", en: "Solution" },
    secResults: { vi: "Kết quả", en: "Results" },
    secSkills: { vi: "Kỹ năng sử dụng", en: "Skills used" },
    experienceTitle: { vi: "Kinh nghiệm làm việc", en: "Work experience" },
    skillsTitle: { vi: "Kỹ năng", en: "Skills" },
    educationTitle: { vi: "Học vấn & chứng chỉ", en: "Education & certificates" },
    testimonialsTitle: { vi: "Đồng nghiệp nói gì", en: "What colleagues say" },
    contactTitle: { vi: "Cùng trao đổi", en: "Let's talk" },
    oppTitle: { vi: "Loại cơ hội tôi quan tâm", en: "Opportunities I'm interested in" },
    formName: { vi: "Họ tên", en: "Your name" },
    formEmail: { vi: "Email của bạn", en: "Your email" },
    formMessage: { vi: "Nội dung", en: "Message" },
    formSend: { vi: "Gửi qua email", en: "Send via email" },
    formHint: { vi: "Nút này sẽ mở ứng dụng email của bạn với nội dung đã điền sẵn.", en: "This opens your email app with the message pre-filled." },
    emailSubject: { vi: "Liên hệ từ portfolio", en: "Contact from portfolio" },
    formSending: { vi: "Đang gửi…", en: "Sending…" },
    formSuccess: { vi: "Đã gửi, cảm ơn bạn! Minh Anh sẽ phản hồi sớm.", en: "Sent, thank you! Minh Anh will reply soon." },
    formFail: { vi: "Chưa gửi được. Đang mở ứng dụng email của bạn để gửi thay thế.", en: "Couldn't send. Opening your email app as a fallback." },
    formPrivacy: { vi: "Tên, email và nội dung bạn nhập sẽ được lưu để phản hồi bạn.", en: "Your name, email and message are stored so we can reply to you." },
    required: { vi: "Vui lòng nhập đủ thông tin.", en: "Please fill in all fields." },
    themeToLight: { vi: "Chuyển sang giao diện sáng", en: "Switch to light theme" },
    themeToDark: { vi: "Chuyển sang giao diện tối", en: "Switch to dark theme" },
    langSwitch: { vi: "Đổi ngôn ngữ", en: "Change language" },
    print: { vi: "In / lưu PDF", en: "Print / save PDF" },
    backToTop: { vi: "Lên đầu trang", en: "Back to top" },
    skipToContent: { vi: "Bỏ qua tới nội dung", en: "Skip to content" }
  }
};
