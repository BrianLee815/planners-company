// src/pages/Terms.jsx
import React from "react";

export default function Terms() {
  return (
    <div className="max-w-md mx-auto px-4 py-12 text-gray-700 text-sm text-left">
      <h1 className="text-base font-bold mb-6">이용약관</h1>

      <section className="mb-6">
        <h2 className="text-sm font-semibold mb-2">1. 목적</h2>
        <p className="mb-2">
          본 약관은 회사가 운영하는 웹사이트의 이용과 관련하여 방문자에게 제공되는 정보의 이용
          조건과 권리, 의무 사항을 안내하기 위해 제정되었습니다. 이용자는 본 웹사이트를 이용함으로써
          본 약관에 동의한 것으로 간주됩니다.
        </p>
        <p>
          웹사이트 이용자는 약관의 내용을 충분히 숙지하고, 동의하지 않는 경우 사이트 이용을
          자제해야 하며, 사이트 이용 시 발생하는 모든 행동과 책임은 이용자에게 있습니다.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-sm font-semibold mb-2">2. 서비스 이용</h2>
        <p className="mb-2">
          웹사이트는 회원가입이나 로그인 없이 누구나 자유롭게 정보를 열람할 수 있는 정보 제공용
          홈페이지입니다. 회사는 이용자의 편의를 위해 다양한 자료와 공지, 이벤트 정보 등을 제공할
          수 있습니다.
        </p>
        <p>
          회사는 운영상 필요에 따라 웹사이트의 구조, 디자인, 콘텐츠를 변경하거나 일부 기능을
          일시적으로 중단할 수 있습니다. 이러한 경우 회사는 사전에 공지하거나, 불가피한
          경우 사후에 안내할 수 있습니다.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-sm font-semibold mb-2">3. 방문자의 의무</h2>
        <p className="mb-2">
          방문자는 웹사이트를 이용함에 있어 아래와 같은 행위를 해서는 안 됩니다.
        </p>
        <ul className="list-disc list-inside space-y-1 mb-2">
          <li>웹사이트 콘텐츠를 무단으로 복제, 배포, 수정하는 행위</li>
          <li>사이트 운영을 방해하거나 악성 프로그램을 유포하는 행위</li>
          <li>법령이나 공서양속에 위반되는 목적의 이용</li>
          <li>타인의 권리 침해, 명예훼손, 개인정보 침해 등 불법 행위</li>
        </ul>
        <p>
          위 규정을 위반할 경우 법적 책임이 발생할 수 있으며, 회사는 위반 행위로 인한 손해에 대해
          책임을 지지 않습니다.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-sm font-semibold mb-2">4. 서비스 제공의 제한</h2>
        <p className="mb-2">
          회사는 천재지변, 시스템 장애, 서버 점검 등 불가피한 사유로 인해 서비스 제공이
          일시적으로 제한될 수 있습니다. 이러한 경우 회사는 웹사이트를 통해 사전 또는 사후에
          공지합니다.
        </p>
        <p>
          또한, 시스템 보안 문제나 외부 공격 등으로 인해 웹사이트 접근이 제한될 수 있으며,
          이로 인한 손해에 대해 회사는 고의 또는 중대한 과실이 없는 한 책임을 지지 않습니다.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-sm font-semibold mb-2">5. 저작권 및 지적재산권</h2>
        <p className="mb-2">
          웹사이트 내 모든 콘텐츠(텍스트, 이미지, 디자인 등)의 저작권은 회사 또는 정당한
          권리자에게 있으며, 무단 복제, 전송, 배포, 수정은 금지됩니다.
        </p>
        <p>
          이용자는 개인적 용도로만 웹사이트 콘텐츠를 활용할 수 있으며, 상업적 이용 시 사전
          회사의 서면 동의가 필요합니다. 저작권 침해 시 관련 법령에 따라 법적 책임이 따릅니다.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-sm font-semibold mb-2">6. 면책조항</h2>
        <p className="mb-2">
          회사는 웹사이트 이용과 관련하여 발생하는 직접적, 간접적 손해에 대해 고의 또는 중대한
          과실이 없는 한 책임을 지지 않습니다. 사이트 이용으로 인해 발생하는 정보 오류, 손실,
          지연 등도 면책됩니다.
        </p>
        <p>
          면책 조항은 이용자의 안전과 서비스를 안정적으로 운영하기 위해 적용되며, 불가항력적
          상황이나 예기치 못한 장애에 대한 책임 범위를 명확히 하기 위한 것입니다.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-sm font-semibold mb-2">7. 개인정보 처리</h2>
        <p className="mb-2">
          본 웹사이트는 회원가입이나 로그인 기능이 없으므로, 방문자의 개인정보를 별도로
          수집하지 않습니다. 다만, 웹사이트 이용 과정에서 IP 주소, 접속 로그, 브라우저
          정보, 쿠키 등의 자동 수집 정보는 통계 분석 및 사이트 개선 목적으로 활용됩니다.
        </p>
        <p>
          쿠키는 사용자가 브라우저 설정을 통해 수집을 거부할 수 있으며, 이 경우 일부 기능이
          제한될 수 있습니다. 수집된 정보는 개인 식별이 불가능한 형태로 안전하게 처리됩니다.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-sm font-semibold mb-2">8. 약관 변경</h2>
        <p className="mb-2">
          회사는 필요 시 본 약관을 변경할 수 있으며, 변경된 약관은 웹사이트 게시를 통해
          효력이 발생합니다. 이용자는 정기적으로 약관을 확인하고, 변경 사항을 숙지해야 합니다.
        </p>
        <p>
          변경 사항에 동의하지 않는 경우, 웹사이트 이용을 중단할 수 있으며, 약관 변경 공지 시
          중요한 사항은 별도로 안내할 수 있습니다.
        </p>
      </section>

      <section>
        <h2 className="text-sm font-semibold mb-2">9. 준거법 및 관할</h2>
        <p className="mb-2">
          본 약관의 해석과 적용은 대한민국 법령을 따르며, 웹사이트 이용과 관련하여 발생하는
          분쟁은 회사 소재지 관할 법원에서 해결함을 원칙으로 합니다.
        </p>
        <p>
          다만, 회사와 방문자 간 합의가 있는 경우, 분쟁 해결을 위해 중재나 조정 절차를
          진행할 수 있으며, 본 약관은 방문자의 권리 보호와 서비스 안정성을 최우선으로 합니다.
        </p>
      </section>
    </div>
  );
}

