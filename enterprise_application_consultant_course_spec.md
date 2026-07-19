# 企業應用顧問技術基礎課程產出規格

## 1. 文件用途

本文件用於提供給 AI，協助產出一套完整、循序漸進且適合非資訊本科顧問自學的技術基礎課程。

AI 在產出課程內容時，必須以「老師教學生」的角度撰寫，不可只整理名詞、貼出定義或提供工具操作步驟。每個章節都應該主動引導學生理解：

1. 這個概念是什麼。
2. 為什麼企業系統顧問需要理解。
3. 它在資訊系統中扮演什麼角色。
4. 它與其他相近概念有什麼差異。
5. 在什麼情境下會使用。
6. 遇到問題時，應該先從哪裡判斷或檢查。

本課程的重點不是培養工程師，而是建立顧問的技術理解、溝通、判斷及 AI 協作能力。

---

# 2. 課程背景

課程對象主要是 Salesforce 或其他企業應用系統顧問。

部分學員並非資訊管理、資訊工程或其他資訊本科背景，因此即使已經會操作 Salesforce，仍可能不熟悉以下技術基礎：

- 前端、後端與資料庫。
- HTML、CSS、JavaScript。
- HTTP、HTTPS、DNS、Cookie。
- API、Webhook、SFTP、SDK。
- JSON、資料庫、Primary Key、資料關聯。
- SSO、SAML、OAuth、MFA。
- Git、CLI、Metadata、Deployment。
- Log、除錯、Root Cause Analysis。
- 資料同步、重複資料與自動化循環。
- 如何向 AI、工程師與原廠 Support 描述技術問題。

課程希望讓團隊具備接近一致的技術共同語言，降低專案溝通落差。

---

# 3. 課程定位

## 3.1 建議課程名稱

**企業應用顧問技術基礎培訓**

英文名稱：

**Technical Foundations for Enterprise Application Consultants**

## 3.2 課程核心定位

本課程教授的是：

- 跨平台可使用的技術原理。
- 企業應用系統的共同架構。
- 顧問需要具備的技術判斷方式。
- 系統問題的初步定位方法。
- 與 AI 及技術人員協作的能力。

本課程不是：

- 特定產品的操作手冊。
- Salesforce 功能按鈕教學。
- 特定廠商的設定流程。
- 深度程式設計課程。
- 要求學員成為工程師的訓練。

---

# 4. 課程設計原則

## 4.1 General-first 原則

課程必須先教通用技術概念，再補充企業 SaaS 或 Salesforce 的對照。

內容順序應為：

```text
技術原理
→ 通用架構與設計模式
→ 中立企業情境
→ Salesforce 或 SaaS 對照
```

不得以特定產品作為課程主體。

例如，不應將章節設計為：

- OneTrust 與 Salesforce Consent 設定。
- Keyper 串接 Salesforce SSO。
- HubSpot 移轉至 MCAE。
- Salesforce Mobile SDK 問題排查。

應改為：

- 網站追蹤、Cookie 與使用者同意管理。
- 企業身分驗證、SSO 與 MFA。
- 跨系統資料移轉與資料治理。
- 行動應用程式 SDK 與事件追蹤。

產品名稱只可作為延伸案例或工具分類範例，不可讓學員誤以為只有該產品才適用。

## 4.2 顧問導向原則

所有內容都應從企業應用顧問的工作情境出發，著重：

- 如何理解需求。
- 如何判斷架構。
- 如何與客戶 IT 溝通。
- 如何與工程師溝通。
- 如何辨識風險。
- 如何進行第一輪問題定位。
- 如何向 AI 提出有效問題。

不需要深入教授複雜演算法、底層程式設計或資訊工程理論。

## 4.3 老師教學角度

AI 必須用老師教學生的方式撰寫。

每個新概念應包含：

- 白話解釋。
- 正式定義。
- 為什麼重要。
- 容易混淆的概念。
- 簡單情境。
- 常見誤解。
- 快速檢核。

不得只提供百科式定義或大量名詞條列。

## 4.4 個人自學原則

所有學員都是各自學習，不安排：

- 小組討論。
- 分組報告。
- 小組實作。
- 同儕互評。
- 課堂角色扮演。
- 需要主持人引導的活動。

所有練習都必須能由單一學員獨立完成。

## 4.5 輕量學習原則

每個小章節必須控制在約 30 分鐘內可讀完並完成快速檢核。

建議時間分配：

| 區段 | 建議時間 |
|---|---:|
| 情境導入 | 2–3 分鐘 |
| 核心概念教學 | 12–15 分鐘 |
| 範例與比較 | 7–8 分鐘 |
| 重點整理 | 2–3 分鐘 |
| 快速概念檢核 | 3–5 分鐘 |

單一章節不應要求學員完成複雜架構圖、正式文件、完整系統設定或長篇分析。

---

# 5. 整體學習目標

完成整套課程後，學員應能：

1. 看懂企業系統的基本架構與資料流向。
2. 理解網站、應用程式、API、資料庫及 SaaS 系統之間的關係。
3. 分辨常見的系統整合方式。
4. 理解資料模型、資料品質與同步風險。
5. 理解 Authentication、Authorization、SSO、MFA 等概念。
6. 看懂基本 HTML、JSON、API Request 與錯誤訊息。
7. 知道遇到問題時應先檢查哪一個系統層級。
8. 能使用正確的技術名詞與客戶 IT、工程師及原廠 Support 溝通。
9. 能將模糊需求或問題整理成 AI 可理解的資訊。
10. 面對不同平台時，能套用相同的技術原理，而不是只記得特定產品設定。

---

# 6. 五大核心能力

## 6.1 System Literacy

學員能看懂：

- 前端、後端、資料庫。
- Client、Server、Browser、Mobile App。
- SaaS、PaaS、IaaS。
- 不同系統環境。
- 同步、非同步、批次與即時處理。
- 企業系統之間的角色與依賴關係。

## 6.2 Data Literacy

學員能理解：

- 資料表、欄位、紀錄。
- Primary Key、Foreign Key、Unique Key。
- 資料關聯。
- Source of Truth。
- 重複資料。
- 資料 Mapping。
- 資料同步規則。
- Consent 與資料治理。

## 6.3 Integration Literacy

學員能理解及區分：

- API。
- Webhook。
- SFTP。
- CSV Import。
- Message Queue。
- Middleware。
- SDK。
- Real-time 與 Batch。

## 6.4 Security Literacy

學員能理解：

- Authentication。
- Authorization。
- SSO。
- IdP 與 SP。
- SAML。
- OAuth。
- OpenID Connect。
- MFA。
- Cookie。
- Consent。
- Token、Secret 與 Certificate。

## 6.5 Troubleshooting and AI Literacy

學員能：

- 讀懂基本錯誤訊息。
- 知道問題可能發生在哪一層。
- 分辨 Root Cause 與 Workaround。
- 提供重現步驟、預期結果與實際結果。
- 將技術問題整理成 AI 或工程師可分析的形式。
- 驗證 AI 的假設及建議。

---

# 7. 完整課程架構

整套課程分為四個階段及十三個模組。每個模組必須再拆成多個約 30 分鐘的小章節。

---

# 第一階段：資訊系統的共同語言

## 模組 1：企業資訊系統架構

### 必教主題

- 什麼是資訊系統。
- 前端、後端與資料庫。
- Client、Server、Browser、Mobile App。
- Website、Web App 與 Mobile App。
- SaaS、PaaS、IaaS。
- Cloud 與 On-premises。
- Development、SIT、UAT、Staging、Production。
- Real-time、Near Real-time、Batch。
- 同步與非同步。
- 系統依賴與資料流。
- System of Record 的初步概念。

### 建議拆分章節

1. 前端、後端與資料庫。
2. Client、Server 與 Browser。
3. Website、Web App 與 Mobile App。
4. SaaS、PaaS 與 IaaS。
5. 測試環境與正式環境。
6. 即時、批次、同步與非同步。
7. 企業系統如何互相合作。

### 中立情境

一家企業具有：

- Corporate Website。
- CRM。
- Marketing Platform。
- ERP。
- Customer Service System。
- Mobile App。
- Data Warehouse。
- Identity Provider。

教學時應讓學員理解每個系統可能負責的角色，但不要求畫完整架構圖。

---

## 模組 2：網路與 Web 運作基礎

### 必教主題

- Internet 與 Intranet。
- IP、Domain 與 DNS。
- URL 的組成。
- HTTP 與 HTTPS。
- Request 與 Response。
- Header、Body、Query Parameter。
- GET、POST、PUT、PATCH、DELETE。
- 常見 Status Code：
  - 200
  - 201
  - 400
  - 401
  - 403
  - 404
  - 429
  - 500
- SSL/TLS。
- Proxy、Firewall、VPN。
- CORS。
- Cookie、Session、Local Storage。
- Browser Cache。
- Browser Developer Tools 基礎。

### 建議拆分章節

1. 網站網址與 DNS。
2. HTTP Request 與 Response。
3. HTTP Method。
4. Status Code。
5. HTTPS、Certificate 與安全傳輸。
6. Cookie、Session 與 Browser Storage。
7. Cache 與 CORS。
8. 使用 Browser Network 觀察 Request。

### 中立情境

使用者在網站填寫表單並送出資料，學員需能判斷：

- 網頁無法開啟。
- 表單可以開啟但無法送出。
- 系統回傳 401、403 或 404。
- 資料送出成功但畫面未更新。

---

## 模組 3：HTML、CSS、JavaScript 與表單

### 必教主題

#### HTML

- Tag、Element、Attribute。
- div、span、p、a、img。
- form、input、select、textarea、button。
- id、class、name。
- Checkbox、Radio、Dropdown。
- Hidden Field。
- Required、Placeholder。
- iframe。
- script。

#### CSS

- Selector。
- Class 與 ID。
- Font、Color、Spacing。
- Margin、Padding。
- Width、Height。
- Display。
- Responsive Design。
- Inline CSS 與 External CSS。

#### JavaScript

- JavaScript 的角色。
- Variable 與 Function 的概念。
- DOM。
- Event。
- Click、Submit、Load。
- Validation。
- Fetch。
- Console Log。
- Tracking Script。

### 建議拆分章節

1. HTML 如何構成網頁。
2. 常見 HTML 元素。
3. 表單欄位與資料送出。
4. CSS 如何控制樣式。
5. Margin、Padding 與版面。
6. JavaScript 與網頁事件。
7. 表單驗證。
8. Hidden Field 與 Tracking Script。

### 中立情境

建立一個活動報名表，包含：

- First Name。
- Last Name。
- Email。
- Company。
- Country。
- Marketing Consent。
- Submit。

不要求學員完整撰寫程式，只需要看懂簡短片段及判斷欄位角色。

---

# 第二階段：資料與系統整合

## 模組 4：資料庫與資料模型

### 必教主題

- Database、Table、Row、Column。
- Data Type。
- Primary Key。
- Foreign Key。
- Unique Key。
- Null 與 Empty String。
- One-to-One。
- One-to-Many。
- Many-to-Many。
- Transaction。
- Index。
- View。
- Stored Procedure。
- Schema。
- SQL 基礎：
  - SELECT
  - WHERE
  - JOIN
  - GROUP BY
  - ORDER BY
  - INSERT
  - UPDATE
  - DELETE

### 建議拆分章節

1. 資料表、欄位與紀錄。
2. Data Type、Null 與 Empty String。
3. Primary Key 與 Unique Key。
4. Foreign Key 與資料關聯。
5. One-to-One、One-to-Many、Many-to-Many。
6. SQL 查詢的基本概念。
7. JOIN 的基本概念。
8. Index、View 與 Stored Procedure。

### 中立情境

會員與訂單系統：

- Customer。
- Order。
- Order Item。
- Product。
- Subscription。
- Interaction。

學員只需進行簡短判斷，例如判斷關聯類型或識別值是否合理。

---

## 模組 5：資料品質與資料治理

### 必教主題

- Source of Truth。
- System of Record。
- Master Data。
- Data Owner。
- Data Steward。
- Data Lineage。
- Duplicate。
- Data Cleansing。
- Validation。
- Mapping。
- Transformation。
- Standardization。
- Consent。
- Data Retention。
- Data Classification。
- Sync Direction。
- Conflict Resolution。
- Null Handling。
- Field Ownership。

### 建議拆分章節

1. Source of Truth 與 System of Record。
2. Master Data 與資料責任。
3. Duplicate 與 Matching。
4. 資料清理與標準化。
5. Field Mapping 與 Transformation。
6. Sync Direction 與 Conflict Resolution。
7. Null 是否可以覆蓋原值。
8. Consent、Retention 與資料分類。
9. Data Lineage。

### 中立情境

CRM、Marketing Platform 與 ERP 都有客戶資料，但姓名、Email、電話及地址不一致。

學員需能理解：

- 哪個系統負責哪類資料。
- 發生衝突時應依什麼規則處理。
- 為什麼 Email 不一定適合作為唯一識別值。
- 空白是否應覆蓋原本有值的資料。

---

## 模組 6：API 與資料交換

### 必教主題

- API 是什麼。
- Endpoint。
- REST 與 SOAP。
- JSON 與 XML。
- Request Header。
- Request Body。
- Response Body。
- Authentication。
- Token。
- Pagination。
- Rate Limit。
- Timeout。
- Retry。
- Idempotency。
- API Version。
- Error Response。
- API 與其他交換方式的差異。

### 必須比較的方式

- API。
- Webhook。
- SFTP。
- CSV Import。
- Database Connection。
- Message Queue。
- Middleware。

### 建議拆分章節

1. API 的角色。
2. REST 與 SOAP。
3. Endpoint、Request 與 Response。
4. JSON 基礎。
5. Header、Body 與 Parameter。
6. API Authentication 與 Token。
7. Status Code 與 Error Response。
8. Pagination、Rate Limit 與 Timeout。
9. Retry 與 Idempotency。
10. API、SFTP、Webhook 與 CSV 的選擇。
11. Middleware 與 Message Queue。

### 中立情境

電商訂單完成後，需要將資料傳送到 CRM、ERP 與 Data Warehouse。

學員需能判斷：

- 何時使用 API。
- 何時使用 Webhook。
- 何時使用 SFTP。
- 如何避免重複建立訂單。
- 系統暫時無法使用時如何處理。

---

## 模組 7：Webhook、事件與自動化

### 必教主題

- Event-driven Architecture。
- Event Producer。
- Event Consumer。
- Trigger。
- Webhook。
- Polling。
- Queue。
- Message。
- Event ID。
- Timestamp。
- Retry。
- Duplicate Event。
- Infinite Loop。
- Race Condition 的基礎概念。
- Monitoring。
- Error Queue。
- At-least-once 與 Exactly-once 的簡化概念。

### 建議拆分章節

1. 事件驅動架構。
2. Webhook 與 Polling。
3. Producer、Consumer 與 Queue。
4. Event ID 與 Timestamp。
5. Retry 與重複事件。
6. 自動化循環。
7. Race Condition。
8. Error Queue 與 Monitoring。

### 中立情境

```text
System A 更新 Customer
→ System B 收到事件並更新 Customer
→ System B 再發送更新事件
→ System A 再次更新 Customer
```

學員應能判斷這是自動化循環，並知道要先檢查觸發條件、來源欄位、新舊值及事件識別資訊。

---

# 第三階段：應用程式與身分安全

## 模組 8：SDK、套件與應用程式

### 必教主題

- API 與 SDK 的差異。
- Library。
- Package。
- Dependency。
- Framework。
- SDK Initialization。
- Configuration。
- Environment。
- Version Compatibility。
- Callback。
- Event Tracking。
- Device Identifier。
- User Identifier。
- Application Log。
- Release Notes。
- SDK 初始化成功不代表整個資料流程成功。

### 建議拆分章節

1. API、SDK、Library 與 Package。
2. Dependency 與 Framework。
3. SDK Initialization。
4. Configuration 與 Environment。
5. Device Identifier 與 User Identifier。
6. Event Tracking。
7. Callback 與 Application Log。
8. Version Compatibility 與升級風險。
9. 如何分層排查 SDK 問題。

### 中立情境

Mobile App 整合第三方推播與分析 SDK：

```text
Mobile App
→ SDK Initialization
→ Device Registration
→ User Identification
→ Behavioral Event
→ Cloud Service
```

學員需理解：

- 初始化成功只代表 SDK 完成基本啟動。
- Device Event 與 User Event 不一定相同。
- 事件未出現時，可依序檢查 App Log、Network 與 Cloud Log。

---

## 模組 9：Authentication、Authorization 與 SSO

### 必教主題

- Authentication 與 Authorization。
- Account、Identity、Credential。
- Session。
- Token。
- SSO。
- Federation。
- Identity Provider。
- Service Provider。
- MFA。
- SAML。
- OAuth。
- OpenID Connect。
- Assertion。
- Certificate。
- User Mapping。
- User Provisioning。
- Just-in-Time Provisioning。
- Single Logout。
- AMR、ACR 與 AuthnContext 的概念。

### 建議拆分章節

1. Authentication 與 Authorization。
2. Account、Identity、Credential 與 Session。
3. SSO 與 Federation。
4. IdP 與 SP。
5. SAML 基礎。
6. Assertion、Certificate 與 User Mapping。
7. OAuth 基礎。
8. OpenID Connect。
9. MFA。
10. 應用程式如何知道 MFA 已完成。
11. User Provisioning 與 JIT。
12. Certificate 到期與停權風險。

### 中立情境

```text
User
→ Business Application
→ Identity Provider
→ Authentication / MFA
→ Assertion or Token
→ Business Application
→ User Mapping
→ Session
```

學員需能區分：

- 誰負責驗證身分。
- 誰負責決定應用程式權限。
- 使用 SAML、OAuth 或 OpenID Connect 的主要目的。
- 登入成功但沒有功能權限屬於哪一類問題。

---

## 模組 10：網站追蹤、Cookie 與使用者同意

### 必教主題

- First-party Cookie。
- Third-party Cookie。
- Session Cookie。
- Persistent Cookie。
- Local Storage。
- Tracking Pixel。
- Tracking Script。
- Tag Manager。
- Analytics。
- Consent Management Platform。
- Consent Category。
- Opt-in 與 Opt-out。
- Consent Signal。
- Script Blocking。
- Data Minimization。
- 表單資料與行為追蹤的差異。

### 建議拆分章節

1. Cookie 與 Browser Storage。
2. First-party 與 Third-party Cookie。
3. Tracking Pixel 與 Tracking Script。
4. Tag Manager。
5. Analytics 與 Marketing Tracking。
6. Consent Management Platform。
7. Opt-in、Opt-out 與 Consent Category。
8. Consent 前後的 Script Blocking。
9. 表單送出與行為追蹤。
10. 撤回同意與 Data Minimization。

### 中立情境

```text
Visitor
→ Website
→ Consent Banner
→ Consent Status
→ Tag Manager
→ Analytics / Marketing Scripts
→ Data Collection Platform
```

學員應理解產品可以不同，但角色及資料流程大致相同。

---

# 第四階段：系統交付與問題分析

## 模組 11：環境、版本與部署

### 必教主題

- Development。
- SIT。
- UAT。
- Staging。
- Production。
- Configuration。
- Code。
- Metadata。
- Version Control。
- Git。
- Repository。
- Commit。
- Branch。
- Merge。
- Pull Request。
- Conflict。
- CLI。
- Deployment。
- Rollback。
- Release。
- Hotfix。
- Environment Variable。
- Secret Management。

### 建議拆分章節

1. 不同系統環境的用途。
2. Configuration、Code 與 Metadata。
3. Version Control 與 Git。
4. Repository、Commit 與 Branch。
5. Merge、Pull Request 與 Conflict。
6. CLI 的角色。
7. Deployment 與 Release。
8. Rollback 與 Hotfix。
9. Environment Variable 與 Secret。
10. 部署前後檢核。

### 中立情境

一個表單功能需要從測試環境部署到正式環境，學員應能辨識：

- 哪些設定可能因環境不同而改變。
- 為什麼需要測試與 Rollback Plan。
- 為什麼 Credential 不應直接寫入程式碼。

---

## 模組 12：系統化除錯與 Root Cause Analysis

### 必教主題

- Error、Warning、Info、Debug。
- Log。
- Stack Trace 的基本概念。
- Request ID。
- Correlation ID。
- Timestamp。
- Reproduce。
- Expected Result。
- Actual Result。
- Scope。
- Frequency。
- Root Cause。
- Workaround。
- Permanent Fix。
- Regression Test。
- 分層除錯。

### 建議拆分章節

1. 錯誤訊息與 Log。
2. Timestamp、Request ID 與 Correlation ID。
3. 如何重現問題。
4. Expected Result 與 Actual Result。
5. Scope 與 Frequency。
6. Root Cause 與 Workaround。
7. Permanent Fix 與 Regression Test。
8. 分層除錯方法。
9. 測試環境正常、正式環境異常。
10. 如何整理 Issue Description。

### 分層除錯架構

```text
User
↓
Browser / Mobile App
↓
Network
↓
Application
↓
API / Integration
↓
Automation
↓
Database
↓
External System
```

### 中立錯誤案例

- 表單送出後沒有資料。
- API 回傳成功但資料未出現。
- 同一筆資料被建立多次。
- 使用者可以登入但沒有權限。
- 推播成功但使用者身分沒有更新。
- Tracking Script 已載入但沒有行為資料。
- 批次匯入只成功一部分。
- 自動化流程重複執行。
- 測試環境正常，正式環境失敗。
- Certificate 到期造成整合中斷。

---

## 模組 13：AI 協作與技術問題拆解

### 必教主題

- AI 可以協助什麼。
- AI 不能取代什麼。
- Context。
- Goal。
- Input。
- Output。
- Constraint。
- Sample Data。
- Error Log。
- Assumption。
- Verification。
- 如何要求 AI 提供檢查順序。
- 如何要求 AI 不直接猜 Root Cause。
- 如何使用 AI 產生 Test Cases。
- 如何驗證 AI 的回答。
- 如何避免提供敏感資訊。
- Prompt 與 Specification 的差異。

### 建議拆分章節

1. AI 在顧問工作中的角色。
2. Context 與 Goal。
3. Input、Output 與 Constraint。
4. 如何提供系統背景。
5. 如何提供 Sample Data。
6. 如何提供 Error Log。
7. 如何要求 AI 列出假設。
8. 如何要求 AI 提供驗證步驟。
9. 如何讓 AI 產生 Test Cases。
10. 如何驗證 AI 回答。
11. 敏感資料與資安。
12. 從模糊問題到完整技術描述。

### 通用提問結構

```text
角色與背景
系統架構
目標
目前正常的部分
目前異常的部分
重現步驟
預期結果
實際結果
錯誤訊息
已完成的檢查
限制條件
希望取得的輸出
```

---

# 8. 每個 30 分鐘章節的固定產出格式

AI 產出每個小章節時，必須依照以下格式。

## 8.1 章節標題

標題應明確指出本章的單一概念。

例如：

- API 是什麼，以及它為什麼存在。
- Authentication 與 Authorization 的差異。
- Primary Key 為什麼不能隨便選。
- Webhook 與 Polling 有什麼不同。

避免過度寬廣的標題，例如「API 完整介紹」。

## 8.2 今日學習目標

列出 2–3 個具體目標。

例如：

完成本章後，學生應能：

- 用一句話說明 API。
- 看懂 Request 與 Response 的基本角色。
- 判斷 API 適合用於什麼情境。

## 8.3 情境導入

使用一個簡短、貼近企業系統顧問工作的情境，引導學生思考。

情境必須使用中立名稱，例如：

- Website。
- CRM System。
- Marketing Platform。
- Identity Provider。
- Mobile App。
- ERP。
- Middleware。

除非是在「延伸對照」段落，否則不要直接使用特定產品名稱。

## 8.4 白話解釋

先以生活化、容易理解的方式解釋概念。

必要時可使用比喻，但比喻之後必須回到正式技術意義，避免學生只記得比喻。

## 8.5 正式定義

提供簡短且正確的技術定義。

不可使用過多艱深術語；若不得不使用新術語，必須立即解釋。

## 8.6 為什麼顧問需要知道

說明此概念會如何影響：

- 需求訪談。
- 系統設計。
- 資料整合。
- 測試。
- 問題排查。
- 與客戶 IT 或工程師溝通。
- 與 AI 協作。

## 8.7 核心概念

每章聚焦 3–5 個核心概念。

不得一次塞入過多名詞。

## 8.8 容易混淆的概念

至少提供一組比較。

例如：

| 概念 A | 概念 B | 差異 |
|---|---|---|
| Authentication | Authorization | 一個確認身分，一個決定權限 |

或：

| API | SDK |
|---|---|
| 系統提供的介面 | 開發者使用的一組工具與程式庫 |

## 8.9 中立企業案例

提供一個簡短、跨平台的案例。

案例應回答：

1. 有哪些角色？
2. 資料或訊息如何移動？
3. 每個系統負責什麼？
4. 哪裡可能出錯？
5. 第一個合理的檢查方向是什麼？

不要求學生畫圖或撰寫完整分析。

## 8.10 Salesforce 或 SaaS 對照

此段為選配，但若加入，必須保持簡短。

目的只是讓學員知道通用概念如何映射到 Salesforce 或其他 SaaS。

格式建議：

| 通用概念 | Salesforce / SaaS 對照 |
|---|---|
| Table | Object |
| Row | Record |
| API Endpoint | REST Resource URL |

不得將本段寫成產品操作手冊。

## 8.11 常見誤解

每章列出 2–3 個常見誤解。

例如：

- API 回傳 200 不一定代表所有後續處理都成功。
- SDK 初始化成功不代表事件已經寫入雲端。
- 登入成功不代表使用者擁有功能權限。

## 8.12 遇到問題先查什麼

提供 3–5 個有順序的初步檢查方向。

例如：

1. 確認發生時間與環境。
2. 確認 Request 是否有送出。
3. 查看 Status Code。
4. 確認 Authentication。
5. 查看接收端 Log。

## 8.13 本章重點整理

列出 3–5 句最重要的內容。

避免只是重複標題。

## 8.14 快速概念檢核

每章提供 3–5 題，控制在 3–5 分鐘內完成。

題型可使用：

- 單選題。
- 是非題。
- 配對題。
- 簡單排序題。
- 一句話回答。
- 「第一步應查哪裡」情境題。

不得要求：

- 畫完整架構圖。
- 撰寫正式文件。
- 進行複雜系統設定。
- 長篇申論。
- 小組討論。
- 上傳作業。
- 使用付費工具才能完成。

## 8.15 參考答案與解釋

每題都必須提供答案及一句簡短解釋。

不能只給正確選項。

## 8.16 延伸思考

最多提供一題非必要的延伸問題。

延伸思考不納入完成要求，也不可超過 2 分鐘。

---

# 9. 快速概念檢核設計規則

## 9.1 檢核目的

快速概念檢核只確認學生是否：

- 認得名詞。
- 分得出相近概念。
- 能套用到簡單情境。
- 知道遇到問題先查哪裡。
- 能用一句話說明概念。

## 9.2 建議的三題式檢核

每章至少可包含以下三種類型：

### 第 1 題：這是什麼？

確認名詞理解。

例如：

> Webhook 的主要用途是什麼？

### 第 2 題：這個情境該用什麼？

確認概念應用。

例如：

> 新訂單產生時，要立即通知另一個系統，較適合使用 API、Webhook 還是每日 CSV？

### 第 3 題：第一步查哪裡？

確認初步判斷。

例如：

> Webhook 沒有收到事件，第一步應確認發送端是否真的送出 Request，還是先修改資料庫？

## 9.3 題目難度

題目應以基礎理解為主，不應刻意設計文字陷阱。

錯誤選項應合理，但不能模糊到讓學生無法判斷。

## 9.4 通過標準

建議：

- 80% 以上：已掌握本章基礎概念。
- 60%–79%：建議重新閱讀「容易混淆的概念」與「重點整理」。
- 60% 以下：建議重新閱讀本章。

此標準只用於自我檢核，不作為績效考核。

---

# 10. 案例設計規則

## 10.1 使用虛構中立企業

所有案例可使用同一間虛構公司，例如：

**Northstar Electronics**

該公司可包含：

- Corporate Website。
- CRM System。
- Marketing Platform。
- ERP。
- Mobile App。
- Customer Data Platform。
- Identity Provider。
- Data Warehouse。
- Customer Service System。
- Middleware。

## 10.2 中立系統名稱

主要教學內容應使用角色名稱，而不是產品名稱：

- CRM System。
- Identity Provider。
- Service Provider。
- Consent Management Platform。
- Marketing Platform。
- Tag Manager。
- Mobile SDK。
- Middleware。
- Data Warehouse。

## 10.3 產品只作為對照

產品名稱僅可出現在：

- 延伸閱讀。
- 工具分類表。
- 通用概念對照。
- Salesforce 應用示例。

例如：

| 通用角色 | 可能產品 |
|---|---|
| CRM | Salesforce、Dynamics、HubSpot |
| Identity Provider | Entra ID、Okta、Keycloak |
| Consent Management Platform | OneTrust、Cookiebot、TrustArc |
| Middleware | MuleSoft、Boomi、Workato、n8n |

不得深入教特定產品按鈕或介面位置，除非另行指定。

---

# 11. 教學語氣與寫作要求

## 11.1 教學語氣

AI 應使用：

- 清楚。
- 友善。
- 有耐心。
- 不預設學生已有資訊本科知識。
- 不使用居高臨下語氣。
- 不使用大量未解釋縮寫。

## 11.2 語言

主要使用繁體中文。

技術名詞第一次出現時，格式建議：

> 身分驗證（Authentication）

後續可使用中文或英文，但應保持一致。

## 11.3 內容深度

內容應足以讓非本科顧問理解並應用，但不需要深入至工程師實作細節。

例如 API 章節需要教：

- Endpoint。
- Request。
- Response。
- Header。
- Body。
- Status Code。
- Token。

但不需要要求學生建立完整 API Server。

## 11.4 範例長度

程式碼、JSON、HTML 或 Log 範例應簡短，通常控制在 5–15 行內。

每個範例都必須逐步解釋，不可直接貼出後跳過說明。

## 11.5 避免內容

避免：

- 過度學術化。
- 大量歷史背景。
- 冗長產品介紹。
- 複雜數學推導。
- 未解釋的程式碼。
- 只貼官方文件內容。
- 只給定義沒有情境。
- 需要多人參與的活動。
- 超過 30 分鐘才能完成的作業。

---

# 12. AI 產出流程要求

AI 不應一次直接寫完整套課程而缺乏一致性。

建議依序產出：

## 第一階段：課程地圖

先產出：

- 所有模組。
- 每個模組的小章節。
- 每章預估閱讀時間。
- 每章學習目標。
- 前後章節依賴關係。

## 第二階段：單章試寫

先選擇 1–2 個小章節，依本文件規格完整撰寫。

檢查：

- 是否能在 30 分鐘內完成。
- 是否符合老師教學生的角度。
- 是否足夠 General。
- 是否沒有綁定特定產品。
- 快速檢核是否過於複雜。

## 第三階段：逐章產出

確認格式後，再依模組順序逐章產出。

每次產出建議不超過 3–5 個小章節，以維持品質及一致性。

## 第四階段：一致性檢查

完成後應檢查：

- 名詞翻譯是否一致。
- 難度是否循序漸進。
- 是否重複教授相同內容。
- 是否引用尚未教過的概念。
- 每章是否符合 30 分鐘量體。
- 每章是否包含快速概念檢核與答案。
- 是否過度依賴 Salesforce 或特定產品。
- 是否有不適合個人自學的小組活動。

---

# 13. 建議產出檔案結構

```text
00_Course_Overview.md
01_Module_Enterprise_Systems/
  01_Frontend_Backend_Database.md
  02_Client_Server_Browser.md
  03_Website_WebApp_MobileApp.md
  ...
02_Module_Web_Fundamentals/
  01_Domain_DNS_URL.md
  02_HTTP_Request_Response.md
  ...
03_Module_HTML_CSS_JavaScript/
04_Module_Data_Model/
05_Module_Data_Governance/
06_Module_API_Integration/
07_Module_Event_Automation/
08_Module_SDK_Application/
09_Module_Identity_SSO/
10_Module_Tracking_Consent/
11_Module_Environment_Deployment/
12_Module_Troubleshooting/
13_Module_AI_Cowork/
Glossary.md
Quick_Check_Answer_Index.md
```

---

# 14. 課程總覽頁應包含

`00_Course_Overview.md` 應包含：

- 課程定位。
- 適合對象。
- 不適合對象。
- 學習目標。
- 課程地圖。
- 建議學習順序。
- 每日學習方式。
- 每章預估 30 分鐘。
- 完成進度追蹤表。
- 如何使用快速概念檢核。
- 技術名詞索引連結。

---

# 15. Glossary 要求

另行產出一份 Glossary，包含：

| 英文名詞 | 中文名稱 | 一句話說明 | 所屬模組 |
|---|---|---|---|

Glossary 應包含本課程所有主要名詞，但不得取代正文教學。

---

# 16. 內容品質檢查清單

AI 在完成每章後，必須自行確認：

- [ ] 本章是否只聚焦一個主要概念？
- [ ] 是否可在約 30 分鐘內完成？
- [ ] 是否以老師教學生的方式解釋？
- [ ] 是否先白話、再正式定義？
- [ ] 是否說明顧問為什麼需要知道？
- [ ] 是否使用中立、跨平台案例？
- [ ] 是否避免綁定單一產品？
- [ ] 是否解釋容易混淆的概念？
- [ ] 是否提供遇到問題時的第一步檢查方式？
- [ ] 是否包含 3–5 題快速概念檢核？
- [ ] 是否提供答案及簡短解釋？
- [ ] 是否適合個人自學？
- [ ] 是否沒有小組討論或複雜作業？
- [ ] 是否沒有超出非工程師顧問需要的深度？
- [ ] 名詞是否與其他章節一致？

---

# 17. 可直接提供給 AI 的總指令

請依照本文件設計並產出一套「企業應用顧問技術基礎培訓」課程。

你必須以一位有耐心、能把技術講清楚的老師角度進行教學，將學生視為已有企業應用顧問經驗，但未必具有資訊本科背景。

課程目標不是培養工程師，而是讓學生能理解企業資訊系統的共同技術語言、資料與整合概念、安全與身分驗證、系統交付、問題排查及 AI 協作方式。

請遵守以下要求：

1. 每個小章節必須約 30 分鐘內可閱讀並完成。
2. 每章只聚焦一個主要概念，避免一次塞入過多名詞。
3. 先使用白話解釋，再補充正式定義。
4. 說明顧問為什麼需要理解這個概念。
5. 以跨平台、通用技術原理為主。
6. 不要以特定 Salesforce、Keyper、OneTrust、HubSpot 或其他產品作為課程主體。
7. 特定產品只能作為簡短的延伸對照。
8. 所有案例應使用中立系統角色或虛構企業。
9. 每章必須包含常見誤解及「遇到問題先查什麼」。
10. 每章必須包含 3–5 題快速概念檢核。
11. 檢核必須能在 3–5 分鐘內完成，不要求畫圖、長篇分析或系統設定。
12. 每題都要提供答案及一句解釋。
13. 課程是個人自學，不可安排小組討論、分組報告或同儕活動。
14. 程式碼、HTML、JSON 或 Log 範例必須簡短，並逐步說明。
15. 使用繁體中文撰寫，英文專有名詞第一次出現時需附上中文解釋。
16. 教學內容應循序漸進，不可引用尚未教過的重要概念。
17. 先產出完整課程地圖與小章節清單，再開始撰寫詳細章節。
18. 詳細章節應依照本文件的固定產出格式。
19. 完成每章後，依照內容品質檢查清單自我檢查。
20. 最終內容必須讓學生能做到：看得懂、分得出、問得對、知道先查哪裡。

請先產出以下內容：

1. 完整模組與小章節清單。
2. 每個小章節的學習目標。
3. 每章預估閱讀時間。
4. 章節之間的先修關係。
5. 第一個模組的前兩個完整示範章節。

在未確認示範章節的深度、語氣及格式前，不要一次產出完整十三個模組的全部正文。
