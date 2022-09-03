import Party from "../models/party.js";

function findAll(req, res) {
  Party.findAll().then((result) => res.json(result));
}

function findParty(req, res) {
  Party.findByPk(req.params.id).then((result) => res.json(result));
}

function addParty(req, res) {
  Party.create({
    name: req.headers['name'],
    descricao: req.headers['descricao'],
    address: req.headers['address']
  }).then((result) => res.json(result));
}

async function updateParty(req, res) {
  await Party.update(
    {
      name: req.headers['name'],
      descricao: req.headers['descricao'],
      address: req.headers['address']
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );
  Party.findByPk(req.params.id).then((result) => res.json(result));
}

async function deleteParty(req, res) {
  await Party.destroy({
    where: {
      id: req.params.id,
    },
  });

  Party.findAll().then((result) => res.json(result));
}

export default { findAll, addParty, findParty, updateParty, deleteParty };
