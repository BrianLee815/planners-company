// src/pages/PrivacyPolicy.jsx
import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-md mx-auto px-4 py-12 text-gray-700 text-sm text-left">
      <h1 className="text-base font-bold mb-6">개인정보처리방침</h1>

      <section className="mb-6">
        <h2 className="text-sm font-semibold mb-2">1. 수집하는 개인정보 항목</h2>
        <p className="mb-2">
          본 웹사이트는 회원가입이나 로그인 기능이 없는 일반 정보 제공용 사이트입니다.
          따라서 방문자가 직접 제공하는 개인정보는 수집하지 않습니다. 그러나 웹사이트 이용
          과정에서 아래와 같은 정보가 자동으로 수집될 수 있으며, 이는 서비스 운영과 사이트
          개선, 통계 분석을 위한 목적에 한정됩니다.
        </p>
        <ul className="list-disc list-inside space-y-1 mb-2">
          <li><strong>IP 주소:</strong> 방문자의 접속 위치 및 서비스 이용 환경 파악</li>
          <li><strong>접속 로그 및 이용 기록:</strong> 페이지 방문 기록, 클릭 기록, 체류 시간 등</li>
          <li><strong>브라우저 및 기기 정보:</strong> 운영체제, 브라우저 종류, 화면 해상도 등</li>
          <li><strong>쿠키 정보:</strong> 사이트 기능 개선 및 방문자 경험 향상을 위한 선택적 수집</li>
        </ul>
        <p>
          위 정보는 개인을 식별할 수 있는 정보와 직접 연결되지 않으며, 통계 분석 목적으로만
          사용됩니다.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-sm font-semibold mb-2">2. 개인정보 수집 방법</h2>
        <p className="mb-2">
          방문자의 개인정보는 웹사이트 이용 과정에서 자동으로 수집됩니다. 구체적으로는
          웹 서버 로그, 쿠키, 웹 브라우저 정보 등을 통해 수집될 수 있으며, 사용자가
          별도로 정보를 입력하지 않아도 자동으로 기록됩니다. 
        </p>
        <p>
          쿠키는 웹사이트 이용 편의성을 위해 사용되며, 예를 들어 방문자가 이전에 방문한 페이지를
          쉽게 확인하거나 사이트 설정을 유지하는 데 도움을 줍니다. 쿠키 사용을 원하지 않는
          경우, 브라우저 설정에서 쿠키 수집을 거부할 수 있습니다.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-sm font-semibold mb-2">3. 개인정보 수집 및 이용 목적</h2>
        <p className="mb-2">
          수집된 정보는 아래와 같은 목적을 위해서만 사용됩니다. 본 사이트는 방문자의 동의 없이
          수집된 정보를 다른 용도로 사용하지 않습니다.
        </p>
        <ul className="list-disc list-inside space-y-1 mb-2">
          <li>서비스 안정성 확보: 서버 운영, 접속 오류 확인, 사이트 보안 강화</li>
          <li>사이트 이용 통계 분석 및 개선: 방문자 수, 페이지 이용 현황 분석, UX/UI 개선</li>
          <li>법적 의무 준수: 관련 법령 및 규제에 따른 기록 보관</li>
        </ul>
        <p>
          모든 정보는 개인을 특정하지 않는 범위 내에서 활용되며, 방문자의 사생활 보호를
          최우선으로 합니다.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-sm font-semibold mb-2">4. 개인정보 제공 및 위탁</h2>
        <p className="mb-2">
          본 웹사이트는 회원가입이나 로그인 기능이 없으므로, 방문자의 개인정보를 제3자에게
          제공하지 않습니다. 또한, 외부 업체에 개인정보 처리 위탁을 하지 않습니다.
        </p>
        <p>
          단, 웹사이트 운영상 필요한 서버 호스팅이나 기술 지원을 위해 외부 업체를 이용할 수
          있으며, 이 경우에도 수집되는 정보는 통계적 분석 목적 등 개인 식별이 불가능한
          범위 내에서만 사용됩니다.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-sm font-semibold mb-2">5. 개인정보 보호 책임자</h2>
        <p className="mb-2">
          본 웹사이트의 개인정보 처리에 대한 책임자와 연락처는 아래와 같습니다. 방문자는
          개인정보 관련 문의, 개선 요청, 불만 사항 등을 언제든지 연락할 수 있습니다.
        </p>
        <p>
          이름: 정형진 <br />
          부서: 기획본부 <br />
          연락처: plan1@plannerscom.kr/ 010-9369-2286
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-sm font-semibold mb-2">6. 이용자의 권리</h2>
        <p>
          본 웹사이트는 회원가입 기능이 없으므로 개인 정보 열람, 정정, 삭제 등의 권리 행사 대상이
          되는 개인정보는 존재하지 않습니다. 그러나 방문자는 사이트 이용과 관련하여 문의 사항이나
          개선 요청을 개인정보 보호 책임자에게 전달할 수 있습니다.
        </p>
      </section>

      <section>
        <h2 className="text-sm font-semibold mb-2">7. 쿠키 정책</h2>
        <p className="mb-2">
          본 웹사이트는 쿠키를 통해 웹사이트 이용 편의성을 높이고, 방문자 트래픽 분석을 수행할
          수 있습니다. 쿠키는 사용자의 동의 하에 수집되며, 브라우저 설정을 통해 언제든지
          수집을 거부할 수 있습니다.
        </p>
        <p>
          쿠키 수집을 거부할 경우 일부 기능이 제한될 수 있으나, 웹사이트 이용은 가능합니다.
        </p>
      </section>
    </div>
  );
}


