import React from "react";
import { Modal, Input } from "antd";
import { useRouter } from "next/router";
const { Search } = Input;

const Modals = ({ setModalOpen, modalOpen }) => {
  const router = useRouter();
  const onSearch = (value) => {
    setModalOpen(!modalOpen);
    router.push(`/search/${value}?page=1`);
  };

  return (
    <div>
      <Modal
        title="অনুসন্ধান করুন"
        style={{ top: 20 }}
        open={modalOpen}
        onCancel={() => setModalOpen(!modalOpen)}
        okButtonProps={{
          disabled: true,
          hidden: true,
        }}
        cancelButtonProps={{
          disabled: true,
          hidden: true,
        }}
      >
        <Search
          placeholder="অনুসন্ধান করুন ..."
          onSearch={onSearch}
          enterButton
        />
      </Modal>
    </div>
  );
};

export default Modals;
