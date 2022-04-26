import { render, screen } from "../../../../test-utils";
import UserCard from "../../../../pages/User/MyPage/UserCard";

const editStateStore = {
  isEdit: false,
  setIsEdit: jest.fn(),
};

describe("마이페이지 버튼 요소 테스트", () => {
  it("프로필 수정 버튼 검사", () => {
    render(<UserCard editStateStore={editStateStore} />);
    const changeProfileButton = screen.getByRole("button", {
      name: "프로필 수정",
    });
    expect(changeProfileButton).toBeInTheDocument();
  });

  it("이미지 변경 버튼 검사", async () => {
    editStateStore.isEdit = true;
    render(<UserCard editStateStore={editStateStore} />);
    const changeImageButton = await screen.findByRole("button", {
      name: "이미지 변경",
    });
    expect(changeImageButton).toBeInTheDocument();
  });
});
