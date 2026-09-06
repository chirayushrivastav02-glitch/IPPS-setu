import { Routes, Route, Navigate } from "react-router-dom";
import { AppProvider } from "@/context/AppContext";
import GovernmentLayout from "@/layouts/GovernmentLayout";
import StartupLayout from "@/layouts/StartupLayout";

import LandingPage from "@/pages/public/LandingPage";
import LoginPage from "@/pages/auth/LoginPage";

import GovDashboard from "@/pages/government/GovDashboard";
import ChallengesPage from "@/pages/government/ChallengesPage";
import CreateChallengePage from "@/pages/government/CreateChallengePage";
import EvaluationPage from "@/pages/government/EvaluationPage";
import StartupsPage from "@/pages/government/StartupsPage";
import GovMatchingPage from "@/pages/government/GovMatchingPage";
import GovPilotsPage from "@/pages/government/GovPilotsPage";
import ProcurementPage from "@/pages/government/ProcurementPage";
import GovPaymentsPage from "@/pages/government/GovPaymentsPage";
import GovScaleupPage from "@/pages/government/GovScaleupPage";
import TemplatesPage from "@/pages/government/TemplatesPage";
import GovNotificationsPage from "@/pages/government/GovNotificationsPage";

import StartupDashboard from "@/pages/startup/StartupDashboard";
import MarketplacePage from "@/pages/startup/MarketplacePage";
import ChallengeDetailPage from "@/pages/startup/ChallengeDetailPage";
import SubmitProposalPage from "@/pages/startup/SubmitProposalPage";
import ApplicationsPage from "@/pages/startup/ApplicationsPage";
import ExpertNetworkPage from "@/pages/startup/ExpertNetworkPage";
import ExpertProfilePage from "@/pages/startup/ExpertProfilePage";
import RecommendedPage from "@/pages/startup/RecommendedPage";
import MatchingPage from "@/pages/startup/MatchingPage";
import PilotsPage from "@/pages/startup/PilotsPage";
import ContractsPage from "@/pages/startup/ContractsPage";
import PaymentsPage from "@/pages/startup/PaymentsPage";
import ScaleupPage from "@/pages/startup/ScaleupPage";
import ProfilePage from "@/pages/startup/ProfilePage";
import DocumentsPage from "@/pages/startup/DocumentsPage";
import NotificationsPage from "@/pages/startup/NotificationsPage";

// BrowserRouter is already mounted in main.tsx — this file owns the route table.

// The startupModules loop is removed in favor of real components

export default function App() {
  return (
    <AppProvider>
      <Routes>
        {/* Public */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Government portal */}
        <Route path="/gov" element={<Navigate to="/gov/dashboard" replace />} />
        <Route
          path="/gov/dashboard"
          element={
            <GovernmentLayout>
              <GovDashboard />
            </GovernmentLayout>
          }
        />
        <Route
          path="/gov/challenges"
          element={
            <GovernmentLayout>
              <ChallengesPage />
            </GovernmentLayout>
          }
        />
        <Route
          path="/gov/challenges/create"
          element={
            <GovernmentLayout>
              <CreateChallengePage />
            </GovernmentLayout>
          }
        />
        <Route
          path="/gov/challenges/:id/edit"
          element={
            <GovernmentLayout>
              <CreateChallengePage />
            </GovernmentLayout>
          }
        />
        <Route
          path="/gov/challenges/:id"
          element={
            <GovernmentLayout>
              <ChallengeDetailPage portal="gov" />
            </GovernmentLayout>
          }
        />
        <Route
          path="/gov/evaluation"
          element={
            <GovernmentLayout>
              <EvaluationPage />
            </GovernmentLayout>
          }
        />
        <Route
          path="/gov/startups"
          element={
            <GovernmentLayout>
              <StartupsPage />
            </GovernmentLayout>
          }
        />
        <Route
          path="/gov/matching"
          element={
            <GovernmentLayout>
              <GovMatchingPage />
            </GovernmentLayout>
          }
        />
        <Route
          path="/gov/pilots"
          element={
            <GovernmentLayout>
              <GovPilotsPage />
            </GovernmentLayout>
          }
        />
        <Route
          path="/gov/procurement"
          element={
            <GovernmentLayout>
              <ProcurementPage />
            </GovernmentLayout>
          }
        />
        <Route
          path="/gov/payments"
          element={
            <GovernmentLayout>
              <GovPaymentsPage />
            </GovernmentLayout>
          }
        />
        <Route
          path="/gov/scaleup"
          element={
            <GovernmentLayout>
              <GovScaleupPage />
            </GovernmentLayout>
          }
        />
        <Route
          path="/gov/templates"
          element={
            <GovernmentLayout>
              <TemplatesPage />
            </GovernmentLayout>
          }
        />
        <Route
          path="/gov/notifications"
          element={
            <GovernmentLayout>
              <GovNotificationsPage />
            </GovernmentLayout>
          }
        />
        {/* Startup portal */}
        <Route path="/startup" element={<Navigate to="/startup/dashboard" replace />} />
        <Route
          path="/startup/dashboard"
          element={
            <StartupLayout>
              <StartupDashboard />
            </StartupLayout>
          }
        />
        <Route
          path="/startup/marketplace"
          element={
            <StartupLayout>
              <MarketplacePage />
            </StartupLayout>
          }
        />
        <Route
          path="/startup/marketplace/:id"
          element={
            <StartupLayout>
              <ChallengeDetailPage portal="startup" />
            </StartupLayout>
          }
        />
        <Route
          path="/startup/marketplace/:id/apply"
          element={
            <StartupLayout>
              <SubmitProposalPage />
            </StartupLayout>
          }
        />
        <Route
          path="/startup/applications"
          element={
            <StartupLayout>
              <ApplicationsPage />
            </StartupLayout>
          }
        />
        <Route
          path="/startup/experts"
          element={
            <StartupLayout>
              <ExpertNetworkPage />
            </StartupLayout>
          }
        />
        <Route
          path="/startup/experts/:id"
          element={
            <StartupLayout>
              <ExpertProfilePage />
            </StartupLayout>
          }
        />
        <Route
          path="/startup/recommended"
          element={
            <StartupLayout>
              <RecommendedPage />
            </StartupLayout>
          }
        />
        <Route
          path="/startup/matching"
          element={
            <StartupLayout>
              <MatchingPage />
            </StartupLayout>
          }
        />
        <Route
          path="/startup/pilots"
          element={
            <StartupLayout>
              <PilotsPage />
            </StartupLayout>
          }
        />
        <Route
          path="/startup/contracts"
          element={
            <StartupLayout>
              <ContractsPage />
            </StartupLayout>
          }
        />
        <Route
          path="/startup/payments"
          element={
            <StartupLayout>
              <PaymentsPage />
            </StartupLayout>
          }
        />
        <Route
          path="/startup/scaleup"
          element={
            <StartupLayout>
              <ScaleupPage />
            </StartupLayout>
          }
        />
        <Route
          path="/startup/profile"
          element={
            <StartupLayout>
              <ProfilePage />
            </StartupLayout>
          }
        />
        <Route
          path="/startup/documents"
          element={
            <StartupLayout>
              <DocumentsPage />
            </StartupLayout>
          }
        />
        <Route
          path="/startup/notifications"
          element={
            <StartupLayout>
              <NotificationsPage />
            </StartupLayout>
          }
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AppProvider>
  );
}
